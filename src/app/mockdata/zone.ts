import { TreeNode } from "primeng/api";

// export const zone: any[] =
//     [
        
//         {
//             id: 1, zone: "Zona 1", status: false, children: [
//                 { id: 1, conection: false, status: false, iconclick: "ads_click", camera: "Camera 1" },
//                 { id: 2, conection: false, status: false, iconclick: "ads_click", camera: "Camera 2" },

//             ]
//         },
//         {
//             id: 2, zone: "Zona 1", status: true, children: [
//                 { id: 1, conection: true, status: true, iconclick: "ads_click", camera: "Camera 1" },
//                 { id: 2, conection: true, status: true, iconclick: "ads_click", camera: "Camera 2" },

//             ]
//         },
//         {
//             id: 3, zone: "Zona 1", status: true, children: [
//                 { id: 1, conection: false, status: true, iconclick: "ads_click", camera: "Camera 1" },
//                 { id: 2, conection: false, status: true, iconclick: "ads_click", camera: "Camera 2" },

//             ]
//         },
//         {
//             id: 4, zone: "Zona 1", status: true, children: [
//                 { id: 1, conection: false, status: true, iconclick: "ads_click", camera: "Camera 1" },
//                 { id: 2, conection: false, status: true, iconclick: "ads_click", camera: "Camera 2" },

//             ]
//         },
//         {
//             id: 4, zone: "Zona 2", status: true, children: [
//                 { id: 1, conection: true, status: true, iconclick: "ads_click", camera: "Camera 1" },
//                 { id: 2, conection: true, status: true, iconclick: "ads_click", camera: "Camera 2" },

//             ]
//         }

//     ]


    export const zone: TreeNode[] =
    [
        {
            key: '0',
            label: "Zona",
            data: 'Documents Folder',
            icon:"activity_zone",
            children:[
            {
                key: '0',
                label: "Zona 1",
                data: 'Documents Folder',
                icon:"activity_zone",
                children:[
                    { key: '0-0-0', label: 'Expenses.doc', icon: 'pi pi-fw pi-file', data: 'Expenses Document' },
                            { key: '0-0-1', label: 'Resume.doc', icon: 'pi pi-fw pi-file', data: 'Resume Document' }
                ]
               
            },
            {
                key: '0',
                label: "Zona 2",
                data: 'Documents Folder',
                icon:"activity_zone",
                children:[
                    { key: '0-0-0', label: 'Expenses.doc', icon: 'pi pi-fw pi-file', data: 'Expenses Document' },
                    { key: '0-0-1', label: 'Resume.doc', icon: 'pi pi-fw pi-file', data: 'Resume Document' }
                ]
            }

           ]
        }
    ]
       