export class MenuModel {
    name: string = "";
    icon: string = "";
    url: string = "";
    isTitle: boolean = false;
    subMenus: MenuModel[] = [];
}

export const Menus: MenuModel[] = [
    {
        name: "Model Liste",
        icon: "fas fa-solid fa-home",
        url: "/",
        isTitle: false,
        subMenus: []
    },
    {
        name: "MTM",
        icon: "fas fa-solid fa-home",
        url: "/",
        isTitle: false,
        subMenus: [
            {
                name: "Bazlar",
                icon: "fas fa-solid fa-home",
                url: "main-bases",
                isTitle: false,
                subMenus: []
            }
        ]
    }
]