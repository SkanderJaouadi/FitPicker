<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AccountsController extends Controller
{
    /*get account */
    public function getaccount($id){
        $account=accounts::find($id);
        if(!$account){
            return('error');
        }
        else{
            return($account);
        }
    }

    /*delete account */
    public function deleteaccount($id){
        $account=getaccount($id);
        if(!$account){
            return('error');
        }
        else{
            $account-delete();
        }
    }

    /*get first name */
    public function getaccountfirstname($id){
        $account=getaccount($id);
        if(!$account){
            return('error');
        }
        else{
            $first_name=$account->first_name;
            return($first_name);
        }
    }

    /*update first name */
    public function updateaccountfirstname($id,$name){
        $account=getaccount($id);
        if(!$account){
            return('error');
        }
        else{
            $account->first_name=$name;
            $account->save();
        }
    }

    /*get last name */
    public function getaccountlastname($id){
        $account=getaccount($id);
        if(!$account){
            return('error');
        }
        else{
            $last_name=$account->last_name;
            return($last_name);
        }
    }

    /*update last name */
    public function updateaccountlastname($id,$name){
        $account=getaccount($id);
        if(!$account){
            return('error');
        }
        else{
            $account->last_name=$name;
            $account->save();
        }
    }

    public function getaccountoutfits($id){
        $account=getaccount($id);
        $accountworedrobeid=$account->woredrobe->id;
        $account->woredrobe.getworedrobeoutfits($accountworedrobeid);
    }

    public function getaccountclothes($id){
        $account=getaccount($id);
        $accountworedrobeid=$account->woredrobe->id;
        $account->woredrobe.getworedrobeclothes($accountworedrobeid);
    }
}
