/**
 *
 * @param sjSects 现有的设计标数组
 * @param colNum jOrgChart生成表格的列数
 */
function genSjSect(sjSects, colNum) { //根据传入设计标数组，在表格右侧生成设计标段结构样式
    if (!sjSects) return;
    var sjSectNum = sjSects.length; //设计标数目
    if (sjSectNum === 0) return;
    var node = '';
    if (sjSectNum % 2 === 0) {
        //偶数

    } else {
        //奇数
        if (sjSectNum == 1) {

        } else {
            //3+2n个设计标
            var n = (sjSectNum - 3) / 2;
            node = `
            <tr class="node-cells expanded">
                <td class="node-cell" colspan="4">
                    <div class="container-div">
                        <div class="node">
                            <span>logo</span>
                            <span data-id="1">项目</span>
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
                        <div class="node">
                            <span>logo</span>
                            <span data-id="1">设计1</span>
                        </div>
                    </div>
                </td>
            </tr>

            
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
                        <div class="node">
                            <span>logo</span>
                            <span data-id="1">设计2</span>
                        </div>
                    </div>
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
                <td class="left5 relLeft">
                    <div class="shortHeri"></div>
                    <div></div>
                </td>
                <td class="node-cell relLeft">
                    <div class="container-div">
                        <div class="node">
                            <span>logo</span>
                            <span data-id="1">设计3</span>
                        </div>
                    </div>
                </td>
            </tr>
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
                        <div class="node">
                            <span>logo</span>
                            <span data-id="1">设计4</span>
                        </div>
                    </div>
                </td>
            </tr>

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
                        <div class="node">
                            <span>logo</span>
                            <span data-id="1">设计5</span>
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