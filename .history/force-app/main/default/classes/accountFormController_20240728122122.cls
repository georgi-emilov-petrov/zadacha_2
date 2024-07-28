public with sharing class accountFormController {
    @AuraEnabled
    public static string createAccount(String accountJson){
        try {
            return '';
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}