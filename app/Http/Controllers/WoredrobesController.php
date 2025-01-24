<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class WoredrobesController extends Controller
{
    /*get woredrobe by id */
    public function getworedrobe($id){
        $woredrobe =woredrobe::find($id);
        if(!$woredrobe){
            return('error');
        }
        else{
            return($woredrobe)
        }
    }

    /*get all woredrobe clothes*/
    public function getworedrobeclothes($woredrobe_id){
        $woredrobe = $this->getworedrobe($woredrobe_id);
        if(!$woredrobe){
            return('wrong woredrobe id')
        }
        else{
            $clothes = $woredrobe->clothes;
            return($clothes);
        }
    }
    
    /*get all woredrobe outfits*/
    public function getworedrobeoutfits($woredrobe_id){
        $woredrobe = $this->getworedrobe($woredrobe_id);
        if(!$woredrobe){
            return('wrong woredrobe id')
        }
        else{
            $outfits = $woredrobe->outfits;
            return($outfits);
        }
    }

    /*get woredrobe clothe by id*/
    public function getworedrobeclothes($woredrobe_id,$clothe_id){
        $woredrobe = $this->getworedrobe($woredrobe_id);
        if(!$woredrobe){
            return('wrong woredrobe id')
        }
        else{
            $clothes = $woredrobe->clothes->getclothe($clothe_id);
            return($clothes);
        }
    }

    /*get woredrobe outfit by id*/
    public function getworedrobeoutfit($woredrobe_id,$outfit_id){
        $woredrobe = $this->getworedrobe($woredrobe_id);
        if(!$woredrobe){
            return('wrong woredrobe id')
        }
        else{
            $outfit = $woredrobe->outfit->getoutfit($outfit_id);
            return($outfit);
        }
    }
}
