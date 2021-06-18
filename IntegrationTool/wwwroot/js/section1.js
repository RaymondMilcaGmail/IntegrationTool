////var myClasses = document.querySelectorAll('.forUpdate'),i = 0,l = myClasses.length;
////for (i; i < l; i++) {
////    myClasses[i].style.display = 'none';
////}


////function findAncestor(el, cls) {
////    while ((el = el.parentElement) && !el.classList.contains('forView'));
////    el.style.display = 'block';
////}


$(document).ready(function () {
    $('.forUpdate').hide();
    $('.forUpdatedis').prop("disabled", true);

    $('.btnEdit').click(function () {
        $(this).parent().find('.forView').hide();
        $(this).parent().find('.forUpdate').show();
        

        $(this).parent().parent().find('.col-sm-5').find('.forView').hide();
        $(this).parent().parent().find('.col-sm-5').find('.forUpdate').show();
        $(this).parent().parent().find('.col-sm-5').find('.forUpdatedis').prop("disabled", false);
        $(this).parent().parent().find('.col-sm-8').find('.forUpdatedis').prop("disabled", false);
        //$('#lblBill').hide();
        //$('#txtBill').show();
        //$('#btnSaveBill').show();
        //$('#btnCancelBill').show();
    });


    $('.btnSave').click(function () {
        $(this).parent().find('.forView').show();
        $(this).parent().find('.forUpdate').hide();


        $(this).parent().parent().find('.col-sm-5').find('.forView').show();
        $(this).parent().parent().find('.col-sm-5').find('.forUpdate').hide();
        $(this).parent().parent().find('.col-sm-5').find('.forUpdatedis').prop('disabled', true);
        $(this).parent().parent().find('.col-sm-8').find('.forUpdatedis').prop('disabled', true);
    });


    $('.btnCancel').click(function () {
        $(this).parent().find('.forView').show();
        $(this).parent().find('.forUpdate').hide();


        $(this).parent().parent().find('.col-sm-5').find('.forView').show();
        $(this).parent().parent().find('.col-sm-5').find('.forUpdate').hide();
        $(this).parent().parent().find('.col-sm-5').find('.forUpdatedis').prop('disabled', true);
        $(this).parent().parent().find('.col-sm-8').find('.forUpdatedis').prop('disabled', true);
    });
});