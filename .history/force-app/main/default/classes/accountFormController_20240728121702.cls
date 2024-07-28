public with sharing class accountFormController {
    @AuraEnabled
    public static string createAccount(String accountJSON){
        try {
            
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}