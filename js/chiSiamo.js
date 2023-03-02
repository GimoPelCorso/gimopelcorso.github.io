function showDescription(source) {
    var id = getDescriptionId(source.id)
    var descDiv = document.getElementById(id)
    descDiv.style.position = "absolute";
    descDiv.style.display="block";
    var offsetLeft = source.offsetLeft + source.clientWidth / 2 - descDiv.clientWidth / 2;
    if (offsetLeft < 10) {offsetLeft = 10 }
    descDiv.style.left = offsetLeft + "px";
    descDiv.style.top = source.offsetTop + source.clientHeight + 10 +"px";
    
    source.style.marginBottom = descDiv.offsetHeight  + 10 + "px";
}

function hideDescription(source) {
    var id = getDescriptionId(source.id);
    source.style.marginBottom = 0 + "px";
    document.getElementById(id).style.display="none";
}

function getDescriptionId(id) {
    return id.replace("Card", "Desc");
}