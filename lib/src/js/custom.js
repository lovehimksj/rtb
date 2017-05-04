// check is device mobile or not
window.mobileAndTabletcheck = function () {
    var check = false;
    (function (a) {
        if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
    })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
};
// redirect to http://marketeer.uahoy.com/ahoy/login.jspx if device is desktop
if (!window.mobileAndTabletcheck()) {
    location.href = "http://marketeer.uahoy.com/ahoy/login.jspx";
}
//
// var daysTime = ['01:00','04:00','08:00','12:00','04:00','08:00','12:00'];
// var days = ['&nbsp;','Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
//
//
// var elem = document.getElementById('timingRow');
//
// var ul = document.createElement("ul");
// ul.className = 'timingRow';
//
// // var blankLi = document.createElement('li');
// // blankLi.innerHTML = "<span>&nbsp;</span>";
// // ul.appendChild(blankLi);
//
// for(var i=0; i< days.length; i++){
//     var li = document.createElement("li");
//     li.id= days[i];
//     li.className= 'center';
//     li.innerHTML = "<span>"+days[i]+"</span>";
//     ul.appendChild(li);
//     elem.appendChild(ul);
//
//     var ul1 = document.createElement("ul");
//     ul1.className = "andband";
//
//     for (var j=0; j< daysTime.length; j++){
//         var li1 = document.createElement("li");
//         li1.innerHTML = "<span>"+daysTime[j]+"</span>";
//         li1.innerHTML = "<span><input type='checkbox' name='"+days[i]+"' id='"+days[i]+"_"+[j]+"'><label for='"+days[i]+"_"+[j]+"'></label></span>";
//         ul1.appendChild(li1);
//     }
//
//     li.appendChild(ul1);
//     // li.appendChild(ul1);
// }



// login method
function login() {
    var email = document.getElementById('icon_mail').value;
    var password = document.getElementById('icon_password').value;
    location.href = 'views/layouts/dashboard.html';
}



function openCampaignWindow() {
    $('#modal1').modal('open');
}
function getTemplateImage() {
    $('#dealImageTemplate').modal('open');
}
function saveDeal() {
    $('#confirmationModal').modal('open');
}

function redeemCoupon(){
    $('#confirmationModal').modal('open');
}
function editDeal() {
    $('#editModal').modal('open');
}
function checkCoupon(couponType) {
    $('.modal').modal();
    $('.coupon-info-modal').modal({
        startingTop: '0%',
        endingTop: '0%'
    });
    if (couponType == 0){
        var textCode = document.getElementById("text_coupon").value;

        if(textCode != null && textCode != ''){
            alert("ok coupon");
        } else {
            $('#textCoupon').modal('open');
        }



    } if(couponType == 1){

        console.log(couponType);
        $('#qrCodeCoupon').modal('open');
        $('#camera-select').material_select();
    } if (couponType == 2){

    }
}


function selectOfferImage(element) {
    console.log(element.nextElementSibling.children[0].getAttribute('src'));
    // document.getElementById("bcat").value = 2;
    document.getElementById("bcat").selectedIndex = "2";
    $('#bcat').material_select();
    skipToNext('offerImage','offerType');
}

function selectDealType (e){
    console.log(e.options[e.selectedIndex].value);
    document.getElementById('textarea1').value = e.options[e.selectedIndex].value;
    // document.getElementById('textarea1').nextElementSibling.className = 'active';
    Materialize.updateTextFields('textarea1');
}

function skipToNext(from, to){
    document.getElementById(from).style.display = 'none';
    document.getElementById(to).style.display = 'block';
}

if(document.getElementById('filled-in-box').checked){
    var checkboxes = document.getElementsByName('branchList');
    for(var i=0, n=checkboxes.length;i<n;i++) {
        checkboxes[i].setAttribute('checked', true);
    }

}

function selectAll(source) {
    console.log(source);
    var checkboxes = document.getElementsByName('branchList');
    for(var i=0, n=checkboxes.length;i<n;i++) {
        checkboxes[i].checked = source.checked;
    }
}

var conditionFlag = false;

function selectConditionType(e) {
    if (e.value == 0){
        conditionFlag = false;
        document.getElementById('editable').style.display = 'none';
        document.getElementById('noeditable').style.display = 'block';
        $('#tncModal').modal('open');

    } else {
        conditionFlag = true;
        $('#tncModal').modal('open');
        document.getElementById('editable').style.display = 'block';
        document.getElementById('noeditable').style.display = 'none';
    }
}

function UloadImage (){
    $('#uploadImageInput').click();
}



function setCouponType (e) {
    console.log(e);

    var targetElement = document.getElementsByClassName('coupon-types');
    for (var i = 0; i < targetElement.length; i++){
        targetElement[i].style.display = 'none';
        var attr = targetElement[i].getAttribute("data-target");
        if (attr == e) {
            targetElement[i].style.display = 'block';
        }
    }
}


/**
 * Created by Himanshu-Machine on 3/30/2017.
 */

