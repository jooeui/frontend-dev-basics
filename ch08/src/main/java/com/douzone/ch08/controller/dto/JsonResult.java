package com.douzone.ch08.controller.dto;

public class JsonResult {
	private String result;	/* "success" or "fail*/
	private Object data; 	/* if success, set*/
	private String message;	/* if fail, set */
	
	private JsonResult() {}
	private JsonResult(Object data) {
		result = "success";
		this.data = data;
		message = null;
	}
	private JsonResult(String message) {
		result = "fail";
		data = null;
		this.message = message;
	}
	public static JsonResult success(Object data) {
		return new JsonResult(data);
	}
	public static JsonResult fail(String message) {
		return new JsonResult(message);
	}
	
	public String getResult() {
		return result;
	}
	public Object getData() {
		return data;
	}
	public String getMessage() {
		return message;
	}
	public void setResult(String result) {
		this.result = result;
	}
	
	public void setData(Object data) {
		this.data = data;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	
}
