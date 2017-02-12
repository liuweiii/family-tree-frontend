import {Person} from "../../person/person";
import {Family} from "../family";
/**
 * Created by apple on 2017/2/12.
 */

export class FamilyDetailOption {

    static categories = [
        {name:"me"},
        {name:"father"},
        {name:"mother"},
        {name:"spouse"},
        {name:"children"}
        ];

    public static generateOption(me: Person,
                                 family: Family) {
        let data = [{
            name: family.me.name,
            person: family.me,
            category: 'me',
            x: 300,
            y: 300
        }];

        let links: any = [];
        if (family.mother) {
            data.push({
                name: family.mother.name,
                person: family.mother,
                category: 'mother',
                x: 800,
                y: 300
            });
            links.push({
                source: family.me.name,
                target: family.mother.name,
                label: {
                    normal: {
                        show: true,
                        formatter: "妈"
                    }
                }
            })
        }

        if (family.father) {
            data.push({
                name: family.father.name,
                person: family.father,
                category: 'father',
                x: 550,
                y: 100
            });
            links.push({
                source: family.me.name,
                target: family.father.name,
                label: {
                    normal: {
                        show: true,
                        formatter: "爸"
                    }
                }
            })
        }
        if (family.spouse) {
            data.push({
                name: family.spouse.name,
                person:family.spouse,
                category: 'spouse',
                x: 500,
                y: 400
            });
            links.push({
                source: family.me.name,
                target: family.spouse.name,
                label: {
                    normal: {
                        show: true,
                        formatter: "配偶"
                    }
                }
            })
        }
        if (family.children && family.children.length > 0) {

            family.children.forEach(
                function(value:Person,index:number,array:Person[]) {
                    data.push({
                        name: value.name,
                        person: value,
                        category: 'children',
                        x: 0,
                        y: 200+index*150,
                    });
                    links.push({
                        source: family.me.name,
                        target: value.name,
                        label: {
                            normal: {
                                show: true,
                                formatter: value.six == "male"?"儿子":"女儿",
                            }
                        }
                    })
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
                    data: data,
                    links: links
                }
            ]
        };
    };
}