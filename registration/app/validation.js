// validation setup
// based on http://jonsamwell.github.io/angular-auto-validate/ and http://plnkr.co/edit/W1NFc8tRueMEzJrpOUeZ?p=preview
app.run([
    'bootstrap3ElementModifier',
    function (bootstrap3ElementModifier) {
          bootstrap3ElementModifier.enableValidationStateIcons(true);
}]);

// Confirm Password
function ConfirmPasswordValidatorDirective(defaultErrorMessageResolver) {
  defaultErrorMessageResolver.getErrorMessages().then(function (errorMessages) {
      errorMessages['confirmPassword'] = 'Please ensure the passwords match.';
    });
    
    return {
        restrict : 'A',
        require : 'ngModel',
        scope : {
            confirmPassword : '=confirmPassword'
        },
        link : function(scope, element, attributes, ngModel) {
            ngModel.$validators.confirmPassword = function(modelValue) {
                return modelValue === scope.confirmPassword;
            };

            scope.$watch('confirmPassword', function() {
                ngModel.$validate();
            });
        }
    };
}

ConfirmPasswordValidatorDirective.$inject = [
    'defaultErrorMessageResolver'
];


// Confirm Email
function ConfirmEmailValidatorDirective(defaultErrorMessageResolver) {
  defaultErrorMessageResolver.getErrorMessages().then(function (errorMessages) {
      errorMessages['confirmEmail'] = 'Please ensure the Email match.';
    });
    
    return {
        restrict : 'A',
        require : 'ngModel',
        scope : {
            confirmEmail : '=confirmEmail'
        },
        link : function(scope, element, attributes, ngModel) {
            ngModel.$validators.confirmEmail = function(modelValue) {
                return modelValue === scope.confirmEmail;
            };

            scope.$watch('confirmEmail', function() {
                ngModel.$validate();
            });
        }
    };
}

ConfirmEmailValidatorDirective.$inject = [
    'defaultErrorMessageResolver'
];


// Phone Number
//var PHONE_REGEXP = /^[(]{0,1}[0-9]{3}[)\.\- ]{0,1}[0-9]{3}[\.\- ]{0,1}[0-9]{4}$/;
var PHONE_REGEXP = /^[(]{0,1}[0-9]*[)\.\- ]{0,1}[0-9]*[\.\- ]{0,1}[0-9]*$/;

function PhoneValidatorDirective(defaultErrorMessageResolver) {
  defaultErrorMessageResolver.getErrorMessages().then(function (errorMessages) {
      errorMessages['validatePhone'] = 'Please enter a valid phone number.';
    });
    
    return {
        restrict : 'A',
        require : 'ngModel',
        scope : {
            validatePhone : '=validatePhone'
        },
        link : function(scope, element, attributes, ngModel) {
            ngModel.$validators.validatePhone = function(modelValue) {
                console.log("validate phone" + modelValue);
                if (typeof modelValue == 'undefined') return true;
                else return PHONE_REGEXP.test(modelValue);
            };

            scope.$watch('validatePhone', function() {
                ngModel.$validate();
            });
        }
    };
}

PhoneValidatorDirective.$inject = [
    'defaultErrorMessageResolver'
];

app.directive('confirmPassword', ConfirmPasswordValidatorDirective); //name convension to confirm-password in HTML directive
app.directive('confirmEmail', ConfirmEmailValidatorDirective);
app.directive('validatePhone', PhoneValidatorDirective);
app.directive('validatePostal', PostalValidatorDirective);

angular.module('jcs-autoValidate')
    .run([
    'defaultErrorMessageResolver',
    function (defaultErrorMessageResolver) {
        // passing a culture into getErrorMessages('fr-fr') will get the culture specific messages
        // otherwise the current default culture is returned.
        defaultErrorMessageResolver.getErrorMessages().then(function (errorMessages) {
          // step 1
          errorMessages['Salutationisrequired'] = 'Salutation is required';
          errorMessages['Firstnameisrequired'] = 'First name is required';
          errorMessages['LastNameisrequired'] = 'Last Name is required';
          errorMessages['JobTitleisrequired'] = 'Job Title is required';
          errorMessages['Emailisrequired'] = 'Email is required';
          errorMessages['Retypeemailisrequired'] = 'Re-type email is required';
          errorMessages['WorkPhoneisrequired'] = 'Work Phone # is required';
          // step 2
          // org info
          errorMessages['OrgNameisrequired'] = 'Organization Name is required';
          errorMessages['OrgCountryisrequired'] = 'Country is required';  
          errorMessages['OrgAddress1isrequired'] = 'Address Line 1 is required';
          errorMessages['OrgCityisrequired'] = 'City/Town is required';
          errorMessages['OrgProvicneisrequired'] = 'Province/State is required';
          errorMessages['OrgPostalisrequired'] = 'Postal Code is required';
          // mailing info (if we don't need to distinguish between org info and mailing info we get rid of these)
          errorMessages['MailCountryisrequired'] = 'Country is required';  
          errorMessages['MailAddress1isrequired'] = 'Address Line 1 is required';
          errorMessages['MailCityisrequired'] = 'City/Town is required';
          errorMessages['MailProvicneisrequired'] = 'Province/State is required';
          errorMessages['MailPostalisrequired'] = 'Postal Code is required';
          
          // more steps?
        });
    }
]);



// Postal Code Canada
var POST_CAN_REGEXP = /^([a-z]|[A-Z])[0-9]([a-z]|[A-Z])[0-9]([a-z]|[A-Z])[0-9]$/;

function PostalValidatorDirective(defaultErrorMessageResolver) {
  defaultErrorMessageResolver.getErrorMessages().then(function (errorMessages) {
      errorMessages['validatePostal'] = 'Please enter a valid postal code.';
    });
    
    return {
        restrict : 'A',
        require : 'ngModel',
        scope : {
            validatePostal : '=validatePostal'
        },
        link : function(scope, element, attributes, ngModel) {
            ngModel.$validators.validatePostal = function(modelValue) {
                console.log("validatePostal-country:" + scope.validatePostal);
                console.log("validatePostal:" + modelValue);
                
                if (typeof modelValue == 'undefined' ||  scope.validatePostal != "Canada") return true;
                else return POST_CAN_REGEXP.test(modelValue);
                
            };

            scope.$watch('validatePostal', function() {
                ngModel.$validate();
            });
        }
    };
}

PostalValidatorDirective.$inject = [
    'defaultErrorMessageResolver'
];