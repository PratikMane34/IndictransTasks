# -*- coding: utf-8 -*-
# Copyright (c) 2019, Pratik and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.model.document import Document

class RegistrationManagement(Document):
	def sub_btn(self):
		print('.....before......')
		print(self.regflag)


		print("Button is clicked and python file is working")
		if (self.pswd==self.confirmpswd):
			frappe.msgprint('Successfully Registered\nFor further process save this document.')
			self.regflag=1
			print('.............after..............')
			print(self.regflag)

		else:
			self.regflag=0
			frappe.msgprint('Your password does not match ')

	def cancel_btn(self):
		frappe.msgprint('Your registration is cancelled')

	def on_submit(self):
		print(self.email)
		sub="Registered successfully"
		msg="Welcome to Indictrans. You are registered on our page. <br>Thank you."
		status=self.send_email(self.email,sub,msg)
		if(status==True):
		  frappe.msgprint('You are regestered. You will be communicted by email.')
		else:
		  frappe.msgprint('Your registration is failed.')

	def on_cancel(self):
		sub="Registration is Canecelled"
		msg="Hello User, your registration is cancelled. Please try again later."
		self.regflag=0
		status=self.send_email(self.email,sub,msg)
		if(status==True):
		  frappe.msgprint('Your registration is cancelled.')
		else:
		  frappe.msgprint('Your registration is failed.')

	def on_update(self):
		print('--------------------On update call')
		#code to save modified date and time in DB

	def before_save(self):
		#frappe.msgprint('Calling before save function')
		if (self.pswd==self.confirmpswd):
			frappe.msgprint('Successfully Registered\nFor further process save this document.')
			#self.regFlag=1

		else:
			frappe.msgprint('Your password does not match ')

	def validate(self):
		print('------------------On validate-------------------------')

	def send_email(self,email_addr,sub,msg):
		print('send mail function')
		try:
			frappe.sendmail(recipients=email_addr,subject=sub,message=msg)
			return True
		except:
			return False

	# def autoname(self):
	# 	self.name = self.l_name + " - " + self.f_name
