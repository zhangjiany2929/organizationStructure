/**
 *
 * @param sjSects 现有的设计标数组
 * @param colNum jOrgChart生成表格的列数
 */
function genSjSect(sjSects, colNum) { //根据传入设计标数组，在表格右侧生成设计标段结构样式
    if(!sjSects) return;
    var sjSectNum = sjSects.length; //设计标数目
    if(sjSectNum === 0) return;
    var node = '';
    if(sjSectNum % 2 === 0) {
        //偶数

    } else {
        //奇数
        if(sjSectNum == 1) {

        }

    }
    if(sjSectNum >= 3) {
        node = `

            <tr>
                <td colspan="` + colNum + `" class="line3">
                    <div class="ph"></div>
                    <div class="lefttop2"></div>

                </td>
                <td>
                    <div class="shortHeri"></div>
                </td>
                <td class="node-cell">
                    <div class="node design" style="background-color: rgb(53, 54, 59); cursor: n-resize;"><span
                            data-id="` + sjSects[sjSectNum-3].id + `">` + sjSects[sjSectNum-3].name + `</span></div>
                </td>
            </tr>
            <tr>
                <td colspan="` + colNum + `" class="line3">
                    <div class="lefttop2"></div>
                </td>
                <!--<td colspan="1">-->
                    <!--&lt;!&ndash;<div class="downLeft"></div>&ndash;&gt;-->
                <!--</td>-->
            </tr>
            <tr class="node-cells expanded">
                <td class="node-cell lefttop3" colspan="` + colNum + `">
                    <div class="node project" style="background-color: rgb(53, 54, 59); cursor: n-resize;"><span
                            data-id="1">项目</span></div>

                </td>
                <!--<td colspan="1" class="line2">-->

                </td>
                <td>
                    <div class="shortHeri"></div>
                </td>
                <td class="node-cell">
                    <div class="node design" style="background-color: rgb(53, 54, 59); cursor: n-resize;"><span
                            data-id="` + sjSects[sjSectNum-2].id + `">` + sjSects[sjSectNum-2].name + `</span></div>
                </td>
            </tr>
            <tr>
                <td colspan="` + colNum + `" class="noFont">
                    <!--<div class="line3 downMid"></div>-->
                    <div class="downRight3"></div>
                    <div class="downLeft3 right4"></div>
                </td>
                <!--<td colspan="2" class="line3">-->
                    <!--<div class="lefttop2"></div>-->
                <!--</td>-->
            </tr>
            <tr>
                <td colspan="` + colNum + `" class="noFont">
                    <div class="downRight2"></div>
                    <div class="downLeft2">
                        <div class="ph right4 border2"></div>
                        <div class="top"></div>
                    </div>
                    <!--<div class="line2 downMid"></div>-->
                </td>
                <!--<td colspan="2" class="line2 top">-->
                    <!--<div class="shortRight"></div>-->
                <!--</td>-->
                <!--<td>-->
                    <!--<div class="shortHeri"></div>-->
                <!--</td>-->
                <td>
                    <div class="shortHeri"></div>
                </td>
                <td class="node-cell">
                    <div class="node design" style="background-color: rgb(53, 54, 59); cursor: n-resize;"><span
                            data-id="` + sjSects[sjSectNum-1].id + `">` + sjSects[sjSectNum-1].name + `</span></div>
                </td>
            </tr>









`;

        for(var i = 3; i < sjSectNum; i ++) {
            var nodeToAdd = `
                        <tr>
                <td colspan="` + colNum + `" class="line3">
                    <div class="ph"></div>
                    <div class="lefttop2"></div>

                    <!--<div class="line2 downRight"></div>-->
                </td>
                <!--<td colspan="1" class="line2">-->
                <!--&lt;!&ndash;<div class="line2">&ndash;&gt;-->
                <!--&lt;!&ndash;<div class="ph"></div>&ndash;&gt;-->
                <!--&lt;!&ndash;<div class="lefttop"></div>&ndash;&gt;-->
                <!--&lt;!&ndash;</div>&ndash;&gt;-->
                <!--</td>-->
                <td>
                    <div class="shortHeri"></div>
                </td>
                <td class="node-cell">
                    <div class="node" style="background-color: rgb(53, 54, 59); cursor: n-resize;"><span
                            data-id="` + sjSects[sjSectNum-1-i].id + `">` + sjSects[sjSectNum-1-i].name + `</span></div>
                </td>
            </tr>
            <tr>
                <td colspan="` + colNum + `" class="line3">
                    <div class="lefttop5"></div>
                </td>
                <!--<td colspan="1">-->
                <!--&lt;!&ndash;<div class="downLeft"></div>&ndash;&gt;-->
                <!--</td>-->
            </tr>
            `;
            node = nodeToAdd + node;
        }

    } else if(sjSectNum === 2) {
        node = `
        
                    <tr>
                <td colspan="` + colNum + `" class="line3">
                    <div class="ph"></div>
                    <div class="lefttop2"></div>

                    <!--<div class="line2 downRight"></div>-->
                </td>
                <!--<td colspan="1" class="line2">-->
                    <!--&lt;!&ndash;<div class="line2">&ndash;&gt;-->
                        <!--&lt;!&ndash;<div class="ph"></div>&ndash;&gt;-->
                        <!--&lt;!&ndash;<div class="lefttop"></div>&ndash;&gt;-->
                    <!--&lt;!&ndash;</div>&ndash;&gt;-->
                <!--</td>-->
                <td>
                    <div class="shortHeri"></div>
                </td>
                <td class="node-cell">
                    <div class="node design" style="background-color: rgb(53, 54, 59); cursor: n-resize;"><span
                             data-id="` + sjSects[0].id + `">` + sjSects[0].name + `</span></div>
                </td>
            </tr>
            <tr>
                <td colspan="` + colNum + `" class="line3">
                    <div class="lefttop2"></div>
                </td>
                <!--<td colspan="1">-->
                    <!--&lt;!&ndash;<div class="downLeft"></div>&ndash;&gt;-->
                <!--</td>-->
            </tr>
            <tr class="node-cells expanded">
                <td class="node-cell lefttop3" colspan="` + colNum + `">
                    <div class="node project" style="background-color: rgb(53, 54, 59); cursor: n-resize;"><span
                            data-id="1">项目</span></div>

                </td>

                </td>
                <td>
                </td>
            </tr>
            <tr>
                <td colspan="` + colNum + `" class="noFont">
                    <!--<div class="line3 downMid"></div>-->
                    <div class="downRight3"></div>
                    <div class="downLeft3 right4"></div>
                </td>
            </tr>
            <tr>
                <td colspan="` + colNum + `" class="noFont">
                    <div class="downRight2"></div>
                    <div class="downLeft2">
                        <div class="ph right4 border2"></div>
                        <div class="top"></div>
                    </div>
                </td>
                <td>
                    <div class="shortHeri"></div>
                </td>
                <td class="node-cell">
                    <div class="node design" style="background-color: rgb(53, 54, 59); cursor: n-resize;"><span
                             data-id="` + sjSects[1].id + `">` + sjSects[1].name + `</span></div>
                </td>
            </tr>
        
        `;
    } else if (sjSectNum === 1) {
        node = `
        
        <tr class="node-cells expanded">
                <td class="node-cell" colspan="` + colNum + `">
                    <div class="node project" style="background-color: rgb(53, 54, 59); cursor: n-resize;"><span
                            data-id="1">项目</span></div>

                </td>
            </tr>
            <tr>
                <td colspan="` + colNum + `" class="noFont">
                    <div class="downRight2"></div>
                    <div class="downLeft2">
                        <div class="ph border2"></div>
                        <div class="top"></div>
                    </div>
                </td>
                <td>
                    <div class="shortHeri"></div>
                </td>
                <td class="node-cell">
                    <div class="node design" style="background-color: rgb(53, 54, 59); cursor: n-resize;"><span
                            data-id="` + sjSects[0].id + `">` + sjSects[0].name + `</span></div>
                </td>
            </tr>
        
        `;
    }
    var firstTr = $('tr').eq(0);
    firstTr.replaceWith(node);
}