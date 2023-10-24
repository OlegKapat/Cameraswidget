import { Directive, ElementRef, HostListener, Inject, Input } from '@angular/core';

@Directive({
    selector: '[resize]'
})

export class ResizibleDirective {

    private nodes: any[] = [];
    private limitHeight = 100;
    private limitWidth = 600;
    private data?: { x: number, y: number, rect: DOMRect, direction: string };
    constructor(@Inject(ElementRef) private element: ElementRef) {
        this.mousemove = this.mousemove.bind(this);
        this.mouseup = this.mouseup.bind(this);
    }
    @Input()
    public resizeToggle: boolean = true;
    mousemove(e: any) {
        if (this.data) {
            var { height, width, top, left } = this.data.rect;
            var style = this.element.nativeElement.style;
            var offset_y = this.data.y - e.clientY;
            var offset_x = this.data.x - e.clientX;
            var set: { [key: string]: number } = {};
            switch (this.data.direction) {
                case 'top':
                    set['height'] = height + offset_y;
                    set['top'] = top - offset_y;
                    break;
                case 'bottom':
                    set['height'] = height - offset_y;
                    break;
                case 'left':
                    set['width'] = width + offset_x;
                    set['left'] = left - offset_x;
                    break;
                case 'right':
                    set['width'] = width - offset_x;

            }
            if (set['width'] < this.limitWidth) {
                delete set['width'];
                delete set['left'];
            }
            if (set['height'] < this.limitHeight) {
                delete set['height'];
                delete set['top'];
            }
            Object.entries(set).forEach(([name, value]) => {
                style[name] = value + 'px';
            });
        }
    }
    createNode(side: string) {
        var node = document.createElement('div');
        node.classList.add('border-' + side, 'border');
        this.element.nativeElement.appendChild(node);
        this.nodes.push(node);
    }
    ngOnInit() {
        ['top', 'left', 'right', 'bottom'].forEach(this.createNode.bind(this));
        window.addEventListener('mousemove', this.mousemove);
        window.addEventListener('mouseup', this.mouseup);
    }
    @HostListener('mousedown', ['$event'])
    mousedown(e: any) {
        if (e.target.classList.contains('border') && this.resizeToggle) {
            var rect = this.element.nativeElement.getBoundingClientRect();
            this.data = {
                x: e.clientX,
                y: e.clientY,
                rect,
                direction: e.target.className.match(/border-([^ ]+)/)[1]
            };
            e.preventDefault();
        } else {
            delete this.data;
        }
    }
    mouseup(e: any) {
        delete this.data;
    }
    ngOnDestroy() {
        this.nodes.forEach((n: any) => n.remove());
        window.removeEventListener('mousemove', this.mousemove);
        window.removeEventListener('mouseup', this.mouseup);
    }
}