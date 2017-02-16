import {Person} from "../../person/person";
import {Family} from "../family";
/**
 * Created by apple on 2017/2/12.
 */

export class FamilyDetailOption {

    static categories = [
        {name: "me"},
        {name: "father"},
        {name: "mother"},
        {name: "spouse"},
        {name: "children"}
    ];

    static data: any;
    static links: any;

    private static pushPerson(person: Person,
                              category: string,
                              me: Person,
                              roleName: string,
                              x: number,
                              y: number) {
        if (person) {
            this.data.push({
                name: person.name,
                person: person,
                category: category,
                value: person.introduce,
                x: x,
                y: y
            });
            this.links.push({
                source: me.name,
                target: person.name,
                label: {
                    normal: {
                        show: true,
                        formatter: roleName
                    }
                }
            })
        }
    }

    public static generateOption(me: Person, family: Family) {
        this.links = [];
        this.data = [{
            name: family.me.name,
            person: family.me,
            category: 'me',
            value: family.me.introduce,
            x: 300,
            y: 300
        }];

        this.pushPerson(family.mother, 'mother', me, "妈", 800, 300);
        this.pushPerson(family.father, 'father', me, '爸', 550, 100);
        this.pushPerson(family.spouse, 'spouse', me, '配偶', 500, 800);

        if (family.children && family.children.length > 0) {
            family.children.forEach(
                function (value: Person, index: number) {
                    FamilyDetailOption.pushPerson(
                        value, 'children', me,
                        value.six == "male" ? "儿子" : "女儿", 0, 200 + index * 150);
                });
        }

        return {
            title: {
                text: me.name + '的家族'
            },
            tooltip: {},
            animationDurationUpdate: 1500,
            animationEasingUpdate: 'quinticInOut',
            series: [
                {
                    type: 'graph',
                    layout: 'none',
                    symbolSize: 40,
                    roam: false,
                    label: {
                        normal: {
                            show: true
                        }
                    },
                    lineStyle: {
                        normal: {
                            color: 'source',
                            curveness: 0.3
                        }
                    },
                    edgeSymbol: ['circle', 'arrow'],
                    edgeSymbolSize: [4, 10],
                    edgeLabel: {
                        normal: {
                            textStyle: {
                                fontSize: 10
                            }
                        }
                    },
                    categories: FamilyDetailOption.categories,
                    data: this.data,
                    links: this.links
                }
            ]
        };
    };
}