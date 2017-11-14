<template>
	<div id="header">
		<!-- 头部 -->
        <header>
            <!-- logo -->
            <div class="am-fl tpl-header-logo">
                <a href="javascript:;"><img src="../assets/img/logo_11.png" height="571" width="1129" alt=""></a>
            </div>
            <!-- 右侧内容 -->
            <div class="tpl-header-fluid">
                <!-- 侧边切换 -->
                <!-- <div class="am-fl tpl-header-switch-button am-icon-list">
                    <span>
                    </span>
                </div> -->
                <!-- 其它功能-->
                <div class="am-fr tpl-header-navbar">
                    <ul>
                        <!-- 欢迎语 -->
                        <li class="am-text-sm tpl-header-navbar-welcome">
                            <img src="../assets/img/user011.png" alt="小灰灰">
                            <a href="javascript:;">欢迎你, <span>{{user_name}}</span> </a>
                        </li>

                        <!-- 退出 -->
                        <li class="am-text-sm">
                            <a href="javascript:;" @click="logOut($event)">
                                <span class="am-icon-sign-out"></span> 退出
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

        </header>
	</div>
</template>

<script>
    export default {
        name: 'Header',
        data () {
            return {
                user_name: $.cookie('name')
            }
        },
        methods: {
            logOut (e) {
                Public.addEditFn(e, '', this.htm(), function () {
                    Public.Ajax('user/logout', {}, 'GET', function(res){
                        $.cookie('token', null);
                        $.cookie('name', null);
                        window.location.href = '#/login';
                    }); 
                });
            },
            htm () {
                return '<div class="am-modal am-modal-prompt" tabindex="-1" id="add-edit-modal">'+
                    '<div class="am-modal-dialog">'+
                    '<div class="am-modal-hd" style="text-align: center;padding: 20px 0px;">确认退出当前账户!</div>'+
                    '<div class="am-modal-footer">'+
                    '<span class="am-modal-btn" data-am-modal-cancel>取消</span>'+
                    '<span class="am-modal-btn" data-am-modal-confirm>退出</span>'+
                    '</div>'+
                    '</div>'+
                    '</div>';
            }
        }
    };
</script>
