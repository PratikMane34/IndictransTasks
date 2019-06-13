// Copyright (c) 2019, Pratik and contributors
// For license information, please see license.txt

frappe.ui.form.on('Registration Management', {
	refresh: function(frm) {
		frm.doc.regFlag= 0;
	},
	email:function(frm){

		var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
					//	console.log(reg.test(frm.doc.email));
            if (reg.test(frm.doc.email) == false)
            {
							//frappe.throw('Hiiiiiiii');
							frm.set_value('email', '');
							frappe.throw('Invalid Email Address');

	}
},
	mobile:function(frm){
		var phoneno = /^\d{10}$/;
		console.log(phoneno.test(frm.doc.mobile));
		if (phoneno.test(frm.doc.mobile) == false)
		{
			console.log("Condition is false");
			frm.set_value('mobile', '');
			frappe.throw('Invalid Mobile Number');
}


},
pincode:function(frm){
	var pin = /^\d{6}$/;
	console.log(pin.test(frm.doc.pincode));
	if (pin.test(frm.doc.pincode) == false)
	{
		frm.set_value('pincode', '');
		frappe.throw('Invalid PinCode Number');
}
},
validate:function(frm){
	if(frm.doc.pswd==frm.doc.confirmpswd){
		console.log('-------------------validate------------------------------');
	}
	else{
		console.log('-------------------Else validate------------------------------');
		frm.set_value('pswd', '');
		frm.set_value('confirmpswd', '');
	}
}



});
