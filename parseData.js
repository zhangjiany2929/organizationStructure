function getSects(data, jlSects, type) {
    //获取全部指定类型的标段
    if(data.type === type) {
        jlSects.push(data);
    }
    var childDatas = data.childrens;
    if(childDatas && childDatas.length > 0) {
        childDatas.map(function(obj) {
            getSects(obj, jlSects, type);
        })
    }
    return jlSects;
}

function getOtherSects(data, jlSects) {
    //获取除施工、监理外其他全部标段
    if((data.type != 'sg') && (data.type != 'jl') && (data.type != 'xm') && (data.type != 'qt')) {
        jlSects.push(data);
    }
    var childDatas = data.childrens;
    if(childDatas && childDatas.length > 0) {
        childDatas.map(function(obj) {
            getOtherSects(obj, jlSects);
        })
    }
    return jlSects;
}

function setClass() {
    //根据每个节点的类型设置其class，仅处理施工标与监理标
    var nodes = $('.node');
    nodes.each(function() {
        var node = $(this);
        var itemId = this.firstChild.getAttribute('data-id');
        if (!itemId) itemId = this.children[1].getAttribute('data-id');
        var sectItem;
        //找到其对应的信息
        for (var j in $.sgSect) {
            //如果是施工标，在这里找到
            if ($.sgSect[j].id == itemId) sectItem = $.sgSect[j];
        }
        for (var j in $.jlSect) {
            //如果是监理标，在这里找到
            if ($.jlSect[j].id == itemId) sectItem = $.jlSect[j];
        }
        if (!sectItem) return true; //没有找到，继续下一个节点
        var type = sectItem.type;
        $(this).addClass(type)
    });
    // for (var i in nodes) {
    //     debugger;
    //     if (!nodes[i].firstChild) continue;
    //     console.log(i);
    //     console.log(nodes[i].firstChild);
    //     var itemId = nodes[i].firstChild.getAttribute('data-id');
    //     var sectItem;
    //     //找到其对应的信息
    //     for (var j in $.sgSect) {
    //         //如果是施工标，在这里找到
    //         if ($.sgSect[j].id == itemId) sectItem = $.sgSect[j];
    //     }
    //     for (var j in $.jlSect) {
    //         //如果是监理标，在这里找到
    //         if ($.jlSect[j].id == itemId) sectItem = $.jlSect[j];
    //     }
    //     if (!sectItem) continue; //没有找到，继续下一个节点
    //     var type = sectItem.type;
    //     $(nodes[i]).addClass(type)
    // }

}