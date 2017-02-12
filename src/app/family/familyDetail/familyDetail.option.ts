import {Person} from "../../person/person";
import {Family} from "../family";
/**
 * Created by apple on 2017/2/12.
 */

export class FamilyDetailOption {

    public static generateOption(me: Person,
                                 family: Family) {
        console.log(family);
        let data = [{
            name: family.me.name,
            category: 'me',
            x: 300,
            y: 300
        }];

        let links: any = [];
        if (family.mother) {
            data.push({
                name: family.mother.name,
                category: 'parent',
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
                category: 'parent',
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
                category: 'me',
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
                    categories: [{name: 'me'}],
                    data: data,
                    // links: [],
                    links: links
                }
            ]
        };
    };
}