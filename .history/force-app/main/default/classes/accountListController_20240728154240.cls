public with sharing class accountListController {
    @AuraEnabled
    public static AccountResponse getAccounts() {
        try {
            List<Account> accounts = [SELECT Id, FirstName__c, LastName__c, Email__C, Phone FROM Account];
            Integer accountNumber = accounts.size();

            return new AccountResponse(accountNumber, accounts);
        } catch(Exception e) {
            throw new AuraHandledException('Error in retrieving accounts: '+ e.getMessage());
        }
    }

    public class AccountResponse {
        @AuraEnabled
        public Integer accountsCount {get; set;}
        @AuraEnabled
        public List<Account> accountsArray {get; set;}

        public AccountResponse(Integer accountsCount, List<Account> accountsArray){
            this.accountsCount = accountsCount;
            this.accountsArray = accountsArray;
        }
    }

    @AuraEnabled
    public static void deleteAccount(String accountId){
        try {
            Id id = (Id) accountId;
            Account account = [SELECT Id FROM Account WHERE Id = :id LIMIT 1];
            delete account;
        } catch (Exception e) {
            throw new AuraHandledException('Error deleting account: ' + e.getMessage());
        }
    }
}
