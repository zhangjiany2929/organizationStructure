function showall(menu_list, parent) {
    $.each(menu_list, function (index, val) {
        if (val.childrens.length > 0) {
            var li = $("<li></li>");
            li.append("<span data-id='" + val.id + "' data-type='" + val.type + "'>" + val.name + "</span>").append("<ul></ul>").appendTo(parent);
            //递归显示
            showall(val.childrens, $(li).children().eq(1));
        } else {
            $("<li></li>").append("<span data-id='" + val.id + "' data-type='" + val.type + "'>" + val.name + "</span>").appendTo(parent);
        }
    });
}

function showRelItems(node) {

    $('.node').removeClass('onShow');
    $(node).addClass('onShow');
//        debugger;
//        node.style.backgroundColor = '#FF0000';
    var itemType = $('[data-id]',node)[0].getAttribute('data-type');
    if (itemType == 'sg') {
        //选中施工标
        showSgRelItems(node);
    } else if (itemType == 'jl') {
        //选中监理标
        showJlRelItems(node);
    } else if (itemType == 'xm') {
        //选中整个项目
        $('.node').addClass('onShow');
    } else {
        //选中其他标
        showQtRelItems(node);
    }
}

function showQtRelItems(node) {
    debugger;
    //高亮展示其他标段相关标段
    var itemId = $('[data-id]',node)[0].getAttribute('data-id');
    var qtItem;
    var jlItem;
    var sgItems = [];
    for (var i in $.otherSect) {
        if ($.otherSect[i].id == itemId) qtItem = $.otherSect[i];
    }


    //找到并高亮其对应施工标
    for (var i in $.sgSect) {
        for (var j in $.sgSect[i].qtId) {
            if ($.sgSect[i].qtId[j] == qtItem.id) sgItems.push($.sgSect[i]);
        }
    }
    for (var i in sgItems) {
        showSgRelItems($('.node>span[data-id=' + sgItems[i].id + ']').parent()[0]);
    }
}


function showJlRelItems(node) {
    //高亮展示监理标段相关标段
    var itemId = $('[data-id]',node)[0].getAttribute('data-id');
    var jlItem;
    var sgItems = [];
    for (var i in $.jlSect) {
        if ($.jlSect[i].id == itemId) jlItem = $.jlSect[i];
    }


    //找到并高亮其对应施工标
    for (var i in $.sgSect) {
        if ($.sgSect[i].pid == jlItem.id) sgItems.push($.sgSect[i]);
    }
    for (var i in sgItems) {
        showSgRelItems($('.node>span[data-id=' + sgItems[i].id + ']').parent()[0]);
    }
}


function showSgRelItems(node) {
    //高亮展示施工标段相关标段
    $(node).addClass('onShow');
//        node.style.backgroundColor = '#FF0000';
    var itemId = $('[data-id]',node)[0].getAttribute('data-id');
    var sgItem;
    var jlItem;
    var qtItems = [];
    for (var i in $.sgSect) {
        if ($.sgSect[i].id == itemId) sgItem = $.sgSect[i];
    }

    //找到并高亮其监理标
    for (var i in $.jlSect) {
        if ($.jlSect[i].id == sgItem.pid) jlItem = $.jlSect[i];
    }
    $('.node>span[data-id=' + jlItem.id + ']').parent().addClass('onShow');
    //找到并高亮其对应其他标

    for (var i in $.otherSect) {
        for (var j in sgItem.qtId) {
            if ($.otherSect[i].id == sgItem.qtId[j]) qtItems.push($.otherSect[i]);
        }
    }
    for (var i in qtItems) {
        $('.node>span[data-id=' + qtItems[i].id + ']').parent().addClass('onShow');
    }
}

function findObjById(dataId) {
    var item = {
        "id": dataId,

    };
    return item;
}