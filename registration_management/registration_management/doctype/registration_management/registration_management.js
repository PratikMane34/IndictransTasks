// Copyright (c) 2019, Pratik and contributors
// For license information, please see license.txt

frappe.ui.form.on('Registration Management', {
	refresh: function(frm) {
		console.log('.....................refresh.......................')
	},
	onload: function(frm) {
		console.log('.....................onload.......................')
		frm.set_value('regflag',0)
	},
	email:function(frm){

		var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
					//	console.log(reg.test(frm.doc.email));
            if ((reg.test(frm.doc.email) == false)&&(frm.doc.pincode!=''))
            {
							//frappe.throw('Hiiiiiiii');
							frm.set_value('email', '');
							frappe.throw('Invalid Email Address');

	}
},
	mobile:function(frm){
		var phoneno = /^\d{10}$/;
		console.log(phoneno.test(frm.doc.mobile));
		if ((phoneno.test(frm.doc.mobile) == false)&&(frm.doc.mobile!=''))
		{
			console.log("Condition is false");
			frm.set_value('mobile', '');
			frappe.throw('Invalid Mobile Number');
}


},
pincode:function(frm){
	var pin = /^\d{6}$/;
	console.log(pin.test(frm.doc.pincode));
	if ((pin.test(frm.doc.pincode) == false)&&(frm.doc.pincode!=''))
	{
		frm.set_value('pincode', '');
		frappe.throw('Invalid PinCode Number');
}
},
validate:function(frm){
	console.log('................regflag in console.......')
	console.log(frm.doc.regflag);
	if((frm.doc.pswd==frm.doc.confirmpswd)){
		console.log('-------------------validate------------------------------');
	}
	else{
		console.log('-------------------Else validate------------------------------');
		frm.set_value('pswd', '');
		frm.set_value('confirmpswd', '');
		frm.set_value('regflag',0)
	}
	if(frm.doc.regflag){
		console.log('Registered successfully')
	}else{
		console.log(frm.doc.regflag)
		frappe.throw('User must be Registered first.');
	}

},
after_save:function(frm){
	console.log('**********************after save validation*************');
	frm.set_value('regflag', 1);
},
onload_post_render: function(frm) {
        console.log("onload_post_render called...................");
        frm.get_field("mobile").$input.on("keypress", function(event) {
        console.log("Success",event);
        if(event.keyCode < 48 || event.keyCode > 57)
        {
        return false;
        }
        });
// frm.get_field("pin_zip").$input.on("keypress", function(event) {
//     console.log("==================pin",event);
//       if(event.keyCode < 48 || event.keyCode > 57)
//       {
//       return false;
//       }
//      	});
}


});
