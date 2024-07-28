public with sharing class accountListController {
    public accountListController() {
        List<Account> accounts = [SELECT Id, Name FROM Account];
    }
}