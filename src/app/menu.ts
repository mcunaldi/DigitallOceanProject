export class MenuModel {
    name: string = "";
    icon: string = "";
    url: string = "";
    isTitle: boolean = false;
    subMenus: MenuModel[] = [];
}

export const Menus: MenuModel[] = [
    {
        name: "Pages",
        icon: "fas fa-solid fa-home",
        url: "/",
        isTitle: false,
        subMenus: [
            {
                name: " Card",
                icon: "fas fa-solid fa-home",
                url: "card-page",
                isTitle: false,
                subMenus: []
            }
        ]
    }
]