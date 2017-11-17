const common = {
	// ajax
	Ajax (url, params, type, callback, callbackfail) {
		var self = this;
		if (window.location.host == '118.190.204.110') {
			var url = 'http://118.190.204.110/admin/' + url;
		} else {
			var url = 'http://admin.yx.dev/admin/' + url;
		}
		var cookie = {
			token: $.cookie('token')
		};
		$.extend(true, params, cookie);
		
		$.ajax({
			url: url,
			type: type,
			dataType: 'json',
			data: params,
		})
		.always(function() {
			var loading = '<div id="loading"><div class="tips"><span class="am-icon-refresh am-icon-spin"></span></div></div>';
			$('#loading').length || $('body').append(loading);
		})
		.done(function(res) {
			if (res.status == 5000) {
				self.dialog(res.msg);
				if (!!callbackfail) {
					callbackfail();
				}
			} else if (res.status == 20000 || res.status == 20001) {
				if (window.location.pathname.indexOf('admin') > '-1') {
					window.location.href = '#/login';
				} else {
					window.location.href = 'admin/#/login';
				}
			} else if (res.status == 100001 || res.status == 100002) {
				self.dialog(res.msg);
				$('button').button('reset');
			} else {
				callback(res);
			};
			$('#loading').remove();
		})
		.fail(function() {
			$('#loading').remove();
			if (!!callbackfail) {
				callbackfail();
			}
			self.dialog('请求失败，请稍后重试');
		})
		
	},	

	// dialog提示框
	dialog (txt){
		$('#dialog-tips').remove();
		var htm = '<div class="am-modal am-modal-no-btn" tabindex="-1" id="dialog-tips">'+
				  '<div class="am-modal-dialog dialog-modal">'+
			      '<div class="am-modal-bd">'+
				      txt +
				  '</div>'+
				  '</div>'+
				  '</div>';
		$('body').append(htm);
		var $modal = $('#dialog-tips');
		$modal.modal();
		setTimeout(() => {
		  this.hideDialog($modal);
		}, 2000);
	},
	hideDialog (modal){
		modal.modal('close');
	},

	// button的loading效果
	btnDialog (e){
		var $btn = $(e.target);
		$btn.button('loading');
		setTimeout(function(){
		    $btn.button('reset');
		}, 3000);
	},

	// 左侧边栏
	autoLeftNav () {
	    $('.tpl-header-switch-button').on('click', function() {
	        if ($('.left-sidebar').is('.active')) {
	            if ($(window).width() > 1024) {
	                $('.tpl-content-wrapper').removeClass('active');
	            }
	            $('.left-sidebar').removeClass('active');
	        } else {

	            $('.left-sidebar').addClass('active');
	            if ($(window).width() > 1024) {
	                $('.tpl-content-wrapper').addClass('active');
	            }
	        }
	    })
	    if ($(window).width() < 1024) {
	        $('.left-sidebar').addClass('active');
	    } else {
	        $('.left-sidebar').removeClass('active');
	    }
	},

	// 初始化下拉
	initSelect () {
		$(function(){
			$('select').selected();
		})
	},

	// 删除确认模态框
	deleteModal (e, id, callback) {
		$('#delete_modal').remove();
		var modal = '<div class="am-modal am-modal-prompt" tabindex="-1" id="delete_modal">'+
					'<div class="am-modal-dialog">'+
					'<div class="am-modal-hd">确认删除当前数据!</div>'+
					'<div class="am-modal-footer">'+
			      	'<span class="am-modal-btn" data-am-modal-cancel>取消</span>'+
			      	'<span class="am-modal-btn" data-am-modal-confirm>删除</span>'+
				    '</div>'+
				  	'</div>'+
					'</div>';
		$('body').append(modal);
	    $('#delete_modal').modal({
			relatedTarget: $(e.target),
			onConfirm: function(e) {
				callback();
			}
		});
	},

	// 提交确认模态框
	addModel (e, callback) {
		$('#confirm_modal').remove();
		var modal = '<div class="am-modal am-modal-prompt" tabindex="-1" id="confirm_modal">'+
					'<div class="am-modal-dialog">'+
					'<div class="am-modal-hd">确认提交当前数据!</div>'+
					'<div class="am-modal-footer">'+
			      	'<span class="am-modal-btn" data-am-modal-cancel>检查一下</span>'+
			      	'<span class="am-modal-btn" data-am-modal-confirm>确认提交</span>'+
				    '</div>'+
				  	'</div>'+
					'</div>';
		$('body').append(modal);
	    $('#confirm_modal').modal({
			relatedTarget: $(e.target),
			onConfirm: function(e) {
				callback();
			}
		});
	},

	// 编辑添加modal
	addEditFn (e, id, htm, callback, init) {
		$('#add-edit-modal').remove();
		$('body').append(htm);
		var $modal = $('#add-edit-modal');
	    var $target = $(e.target);
	    if (!!init) {
	    	init();
	    };
		$modal.modal({
			relatedTarget: $(e.target),
			onConfirm: function(e) {
				callback();
			}
		});
	},

	// 回车事件 
	keyEnter () {
		$('body').unbind('keyup').on('keyup', 'input[type="text"]', function(e){
			e.preventDefault();
			var flag = true;
			var inputs = $(e.target).parents('.am-form').find('input[type="text"]');
			$.each(inputs, function(index, val) {
				 if (!$(val).val()) {
				 	flag = false;
				 }
			});
			if (e.keyCode == 13 && flag) {
				$('#modal_confirm').trigger('click');
			}
		});
	},

	// 打印
	print (id) {
		$(id).printThis({
			importStyle: true
		});
	},

	// 正整数
	inputNumber (cls) {
		$('body').on('keyup', cls, function(e) {
			var val = $(e.target).val();
			if (/^[1-9]\d*$/.test(val)) {
				$(e.target).val(val);
			} else {
				$(e.target).val('');
			}
		});
	}
	





}

export default common;