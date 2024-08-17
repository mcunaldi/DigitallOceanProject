export class MenuModel {
    name: string = "";
    icon: string = "";
    url: string = "";
    isTitle: boolean = false;
    subMenus: MenuModel[] = [];
}

export const Menus: MenuModel[] = [
    {
        name: "Crews",
        icon: "fas fa-solid fa-anchor",
        url: "/card-page",
        isTitle: false,
        subMenus: []
    },
    {
        name: "Certificates",
        icon: "fas fa-solid fa-certificate",
        url: "/certificate",
        isTitle: false,
        subMenus: []
    }
]