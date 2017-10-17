/**
 *
 * @param sjSects 现有的设计标数组
 * @param colNum jOrgChart生成表格的列数
 */
function genSjSect(sjSects, colNum) { //根据传入设计标数组，在表格右侧生成设计标段结构样式
    // if (!sjSects) return;
    var sjSectNum = sjSects.length; //设计标数目
    // if (sjSectNum === 0) return;
    var node = '';
    if (sjSectNum % 2 === 0) {
        //偶数
        if (sjSectNum == 0) {
            //完全没有设计标
            node =
                `
            <tr class="node-cells expanded">
                <td class="node-cell" colspan="` + colNum + `">
                    <div class="container-div">
                        <div class="node project">
                            <span class="prj-logo"></span>
                            <span data-id="1" data-type="xm">`+ $.prjData.name +`</span>
                        </div>
                    </div>
                </td>
                </td>

            </tr>
            `;
        }
        else {
            //2+2n个设计标
            var n = (sjSectNum - 2) / 2;
            node =
                `
            <tr class="node-cells expanded">
                <td class="node-cell" colspan="` + colNum + `">
                    <div class="node project">
                    <span class="prj-logo"></span>
                    <span
                            data-id="1" data-type="xm">`+ $.prjData.name +`</span></div>

                </td>
                <!--<td colspan="1" class="line2">-->

                </td>

            </tr>
            <tr>
                <td colspan="` + colNum + `" class="noFont">
                    <!--<div class="line3 downMid"></div>-->
                    <div class="downRight3"></div>
                    <div class="downLeft3"></div>
                </td>
                <!--<td colspan="2" class="line3">-->
                    <!--<div class="lefttop2"></div>-->
                <!--</td>-->
            </tr>



            <tr>
                <td colspan="` + colNum + `" class="noFont">
                    <!--<div class="line3 downMid"></div>-->
                    <div class="downRight4"></div>
                    <div class="inlineB widthHight downLeft4">
                    </div>
                </td>
                <td>
                    <div class="ph"></div>
                    <div class="shortHeriMid left5 relLeft"></div>
                </td>
                <td class="node-cell relLeft">
                    <div class="node qt">
                    <span class="sj-logo"></span>
                    <span
                            data-id="`+sjSects[0].id+`">`+sjSects[0].name+`</span></div>
                </td>
            </tr>
`;
            for (var i = 0; i < n; i++) {
                node = node +
                    `
            <tr>
                <td colspan="` + colNum + `" class="noFont">
                    <!--<div class="line3 downMid"></div>-->
                    <div class="downRightHigh"></div>
                    <div class="downLeftHigh"></div>
                </td>
                <td class="left5 relLeft">
                    <div class="shortHeri"></div>
                    <div></div>
                </td>
                <td class="node-cell relLeft">
                    <div class="node qt">
                    <span class="sj-logo"></span>
                    <span
                            data-id="`+sjSects[i+1].id+`">`+sjSects[i+1].name+`</span></div>
                </td>
            </tr>
                `;

            }

            node = node +
                `
            <tr>
                <td colspan="` + colNum + `" class="noFont">
                    <div class="downRight3"></div>
                    <div class="downLeft3 hidOverflow"><div class="top relLeft"></div></div>
                </td>
                <td class="left5 relLeft">
                    <div class="shortHeri2"></div>
                    <div></div>
                </td>
            </tr>
            `;

            for (var i = 0; i < n; i++) {
                node = node +
                    `
            <tr>
                <td colspan="` + colNum + `" class="noFont">
                    <div class="downRight2"></div>
                    <div class="downLeft2">
                        <div class="ph border2"></div>
                        <div class="ph border2"></div>
                        <div class="ph border2"></div>
                    </div>
                </td>
                <td class="left5 relLeft">
                    <div class="shortHeri"></div>
                    <div></div>
                </td>
                <td class="node-cell relLeft">
                    <div class="node qt">
                    <span class="sj-logo"></span>
                    <span
                            data-id="`+sjSects[sjSects.length/2+i].id+`">`+sjSects[sjSects.length/2+i].name+`</span></div>
                </td>
            </tr>
                
                `;

            }


            node = node +
                `
            <tr class="node-cells expanded">
                <td colspan="` + colNum + `" class="noFont">
                    <div class="downRightHigh"></div>
                    <div class="downLeftHigh"></div>
                </td>
                <td>
                    <div class="shortHeri left5 relLeft"></div>
                </td>
                <td class="node-cell relLeft">
                    <div class="node qt">
                    <span class="sj-logo"></span>
                    <span
                        data-id="`+sjSects[sjSects.length-1].id+`">`+sjSects[sjSects.length-1].name+`</span></div>
                </td>
            </tr>
                `;
        }
    } else {
        //奇数
        if (sjSectNum == 1) {
            node =
                `
            <tr class="node-cells expanded">
                <td class="node-cell" colspan="` + colNum + `">
                    <div class="container-div">
                        <div class="node project">
                            <span class="prj-logo"></span>
                            <span data-id="1" data-type="xm">`+ $.prjData.name +`</span>
                        </div>
                    </div>
                </td>
                </td>

            </tr>
                            <tr>
                <td colspan="` + colNum + `" class="noFont">
                    <div class="downRight2"></div>
                    <div class="downLeft2">
                        <div class="ph border2"></div>
                        <div class="top ph border2 relLeft"></div>
                        <div class="ph border2"></div>
                    </div>
                </td>
                <td class="relLeft">
                    <div class="shortHeri"></div>
                    <div></div>
                </td>
                <td class="node-cell relLeft">
                    <div class="container-div">
                        <div class="node qt">
                            <span class="sj-logo"></span>
                            <span data-id="`+sjSects[0].id+`">`+sjSects[0].name+`</span></div>
                        </div>
                    </div>
                </td>
            </tr>
                `;
        } else {
            //3+2n个设计标
            var n = (sjSectNum - 3) / 2;
            node = `
            <tr class="node-cells expanded">
                <td class="node-cell" colspan="4">
                    <div class="container-div">
                        <div class="node project">
                            <span class="prj-logo"></span>
                            <span data-id="1" data-type="xm">`+ $.prjData.name +`</span>
                        </div>
                    </div>
                </td>
                </td>

            </tr>
            <tr>
                <td colspan="` + colNum + `" class="noFont">
                    <div class="downRight3"></div>
                    <div class="downLeft3"></div>
                </td>
            </tr>


            <tr>
                <td colspan="` + colNum + `" class="noFont">
                    <div class="downRight4"></div>
                    <div class="inlineB widthHight downLeft4">
                    </div>
                </td>
                <td>
                    <div class="ph"></div>
                    <div class="shortHeriMid left5 relLeft"></div>
                </td>
                <td class="node-cell relLeft">
                    <div class="container-div">
                        <div class="node qt">
                            <span class="sj-logo"></span>
                            <span data-id="`+sjSects[0].id+`">`+sjSects[0].name+`</span></div>
                        </div>
                    </div>
                </td>
            </tr>

            
           `;
            for (var i = 0; i < n; i++) {
                node = node + `
                 <tr>
                <td colspan="` + colNum + `" class="noFont">
                    <div class="downRightHigh"></div>
                    <div class="downLeftHigh"></div>
                </td>
                <td class="left5 relLeft">
                    <div class="shortHeri"></div>
                    <div></div>
                </td>
                <td class="node-cell relLeft">
                    <div class="container-div">
                        <div class="node qt">
                            <span class="sj-logo"></span>
                            <span data-id="`+sjSects[i+1].id+`">`+sjSects[i+1].name+`</span></div>
                        </div>
                    </div>
                </td>
            </tr>
`;
            }

            node = node +
                `
            


            <tr>
                <td colspan="` + colNum + `" class="noFont">
                    <div class="downRight2"></div>
                    <div class="downLeft2">
                        <div class="ph border2"></div>
                        <div class="top ph border2 relLeft"></div>
                        <div class="ph border2"></div>
                    </div>
                </td>
                <td class="left5 relLeft">
                    <div class="shortHeri"></div>
                    <div></div>
                </td>
                <td class="node-cell relLeft">
                    <div class="container-div">
                        <div class="node qt">
                            <span class="sj-logo"></span>
                            <span data-id="`+sjSects[(sjSects.length-1)/2].id+`">`+sjSects[(sjSects.length-1)/2].name+`</span></div>
                        </div>
                    </div>
                </td>
            </tr>
`;
            for (var i = 0; i < n; i++) {
                node = node +
                    `
                                    <tr>
                <td colspan="` + colNum + `" class="noFont">
                    <!--<div class="line3 downMid"></div>-->
                    <div class="downRightHigh"></div>
                    <div class="downLeftHigh"></div>
                </td>
                <td class="left5 relLeft">
                    <div class="shortHeri"></div>
                    <div></div>
                </td>
                <td class="node-cell relLeft">
                    <div class="container-div">
                        <div class="node qt">
                            <span class="sj-logo"></span>
                            <span data-id="`+sjSects[(sjSects.length-1)/2+i+1].id+`">`+sjSects[(sjSects.length-1)/2+i+1].name+`</span></div>
                        </div>
                    </div>
                </td>
            </tr>
                        `;
            }

            node = node +
                `
        

            <tr>
                <td colspan="` + colNum + `" class="noFont">
                    <!--<div class="line3 downMid"></div>-->
                    <div class="downRight4"></div>
                    <div class="inlineB widthHight downLeft4">
                    </div>
                </td>
                <td>
                    <div class="shortHeri left5 relLeft"></div>
                </td>
                <td class="node-cell relLeft">
                    <div class="container-div">
                        <div class="node qt">
                            <span class="sj-logo4"></span>
                            <span data-id="`+sjSects[(sjSects.length-1)].id+`">`+sjSects[(sjSects.length-1)].name+`</span></div>
                        </div>
                    </div>
                </td>
            </tr>
            `;
        }

    }

    var firstTr = $('tr').eq(0);
    firstTr.replaceWith(node);
    setClass();
    $('.node').addClass('onShow');
}