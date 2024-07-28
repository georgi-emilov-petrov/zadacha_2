public with sharing class accountListController {
    public static AccountResponse getAccounts() {
        List<Account> accounts = [SELECT Id, Name FROM Account];
        Integer accountNumber = accounts.size();
        
        return new AccountResponse(accountNumber, accounts);
    }

    public class AccountResponse {
        @AuraEnabled
        public Integer accountsCount {get; set;}
        @AuraEnabled
        public List<Account> accountsArray {get; set;}

        public AccountResponse(Integer accountsCount, List<Account> accountsArray){
            this.accountsCount = accountsCount;
            this.accountsArray = accountArray;
        }
    }
}
