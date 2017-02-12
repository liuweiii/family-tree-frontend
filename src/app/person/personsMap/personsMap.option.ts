import {Person} from "../person";
/**
 * Created by apple on 2017/2/12.
 */

export class PersonsMapOption {

    public static generateOption(me:Person,
    persons:Person[]) {
        console.log(persons);
        return {
            title: {
                text: me.name+'的家族'
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
                    categories: [{name: 'liuwei'}],
                    data: [{
                        name: '节点1',
                        category: 'liuwei',
                        x: 300,
                        y: 300
                    }, {
                        name: '节点2',
                        category: 'liuwei',
                        x: 800,
                        y: 300
                    }, {
                        name: '节点3',
                        x: 550,
                        y: 100
                    }],
                    // links: [],
                    links: [{
                        source: 0,
                        target: 1,
                        symbolSize: [5, 20],
                        label: {
                            normal: {
                                show: true,
                                formatter: "父亲"
                            }
                        },
                        lineStyle: {
                            normal: {
                                width: 5
                            }
                        }
                    }, {
                        source: '节点2',
                        target: '节点1',
                        label: {
                            normal: {
                                show: false
                            }
                        }
                    }, {
                        source: '节点1',
                        target: '节点3'
                    }, {
                        source: '节点2',
                        target: '节点3'
                    }]
                }
            ]
        };
    };
}