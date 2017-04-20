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