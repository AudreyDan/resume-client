(function () {
    'use strict';
    var app = angular.module("resumeApp");
    app.controller("basicInfoCtrl",["$scope","$rootScope","$state","basicInfoService",function ($scope,$rootScope,$state,basicInfoService) {
        /*$scope.saveInfo = function () {
            console.log($scope.test)
            $('#myModal').modal('hide');
        }*/

        var username = $rootScope.user.username;
        var token = $rootScope.token;

        basicInfoService.loadBasicInfo(username,token,function (data) {
            console.log(data)
            if (data == null){
                $(".addDisplay").css("display","block");
                $(".updateInfoBtn").css("display","none");
            }else {
                $(".updateDisplay").css("display","block");
                $(".addInfoBtn").css("display","none");
                $scope.basicInfo = data;
            }

        })

        $('#birthDate').datetimepicker({
            format: 'YYYY-MM-DD',
            locale: moment.locale('zh-cn')
        });
        
        $scope.addBasicInfo = function () {
            $("#myModalLabel").text("新增基本信息");
        }
        $scope.updateBasicInfo = function () {
            $("#myModalLabel").text("编辑基本信息");
        }

        $scope.saveAddInfo = function (basicInfo) {
            var information = {
                "address": basicInfo.address,
                "birthday": basicInfo.birthday,
                "createTime": "2018-05-30T07:29:41.009Z",
                "education": basicInfo.education,
                "extra": basicInfo.extra,
                "introduction": basicInfo.introduction,
                "isActive": true,
                "marriage": basicInfo.marriage,
                "name": basicInfo.name,
                "politicsStatus": basicInfo.politicsStatus,
                "sex": "男",
                "skill": basicInfo.skill,
                "speciality": basicInfo.speciality,
                "updateTime": "2018-05-30T07:29:41.009Z",
                "username": username,
                "workTime": basicInfo.workTime
            };

            basicInfoService.addInformation(information,token,function (data) {
                successTip("新增成功！");
                setTimeout(function () {
                    refresh();
                },1000);
            })
        }
        $scope.saveUpdateInfo = function (basicInfo) {
            var information = {
                "id":basicInfo.id,
                "address": basicInfo.address,
                "birthday": basicInfo.birthday,
                "createTime": "2018-05-30T07:29:41.009Z",
                "education": basicInfo.education,
                "extra": basicInfo.extra,
                "introduction": basicInfo.introduction,
                "isActive": true,
                "marriage": basicInfo.marriage,
                "name": basicInfo.name,
                "politicsStatus": basicInfo.politicsStatus,
                "sex": "男",
                "skill": basicInfo.skill,
                "speciality": basicInfo.speciality,
                "updateTime": "2018-05-30T07:29:41.009Z",
                "username": username,
                "workTime": basicInfo.workTime
            };

            basicInfoService.updateInformation(information,token,function (data) {
               /* successTip("修改成功！");*/
               if (data.msg == "修改失败"){
                   errorTip("修改失败!");
               }else {
                   successTip("修改成功！");
                   setTimeout(function () {
                       refresh();
                   },1000);
               }
               console.log(data)
            })
        }

    }]);

    //成功的提示框
    function successTip(tip){
        swal({
            title:tip,
            type:"success",
            timer:1000,
            showConfirmButton:false
        });
    }

    //有误的提示框
    function errorTip(tip){
        swal({
            title:tip,
            type:"error",
            timer:1000,
            showConfirmButton:false
        });
    }

    app.service("basicInfoService",["$http","domain",function ($http,domain) {
        this.loadBasicInfo = function (username,token,callBack) {
            $http({
                url : domain + "/api/select/information/"+username,
                method : "GET",
                headers : {
                    'Authorization' : "Bearer "+token
                },
            }).then(function (data) {
                if (callBack){
                    callBack(data.data.data);
                }
            })
        }
        this.addInformation = function (info,token,callback) {
            $http({
                method:'POST',
                url:domain + '/api/insert/information',
                data : JSON.stringify(info),
                headers : {
                    'Authorization' : "Bearer "+token
                },
            }).then(function(data){
                if (callback) {
                    callback(data.data);
                }
            });
        }
        this.updateInformation = function (info,token,callback) {
            $http({
                method:'PUT',
                url:domain + '/api/update/information',
                data : JSON.stringify(info),
                headers : {
                    'Authorization' : "Bearer "+token
                },
            }).then(function(data){
                if (callback) {
                    callback(data.data);
                }
            });
        }
    }])
})();