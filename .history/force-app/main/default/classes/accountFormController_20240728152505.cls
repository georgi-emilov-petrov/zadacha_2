public with sharing class accountFormController {
    @AuraEnabled
    public static string createAccount(String accountJson) {
        try {
            System.debug(accountJson);

            Map<String, Object> accountMap = (Map<String, Object>) JSON.deserializeUntyped(accountJson);
            Map<String,Object> accountDetails = (Map<String, Object>) accountMap.get('account');

            Account newAccount = new Account();
            String firstName = (String) accountDetails.get('firstName');
            String lastName = (String) accountDetails.get('lastName');
            String email = (String) accountDetails.get('email');
            String phone = (String) accountDetails.get('phone');

            newAccount.Name = firstName + lastName;
            newAccount.FirstName__c = firstName;
            newAccount.LastName__c = lastName;
            newAccount.Phone = phone;
            newAccount.Email__c = email;
            insert newAccount;

            String result = '{"success": true, "account": {"firstName": "' + firstName + '", "lastName": "' + lastName + '", "email": "' + email + '", "phone": "' + phone + '"}}';
            System.debug('Result: ' + result);
            return result;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}
