public with sharing class accountFormController {
    @AuraEnabled
    public static string createAccount(String accountJson){
        try {
            
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}