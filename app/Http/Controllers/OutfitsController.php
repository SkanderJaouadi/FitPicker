<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\outfits;
use Inertia\Inertia;

class OutfitsController extends Controller
{
    /*get all outfits */
    public function getoutfits(){
        $outfits = Outfit::all();
        return response()->json($outfits);
    }

    /*get outfit by id*/
    public function getoutfit($id){
        $outfit = outfit::find($id);
        if(!$outfit){
            return('error');
        }
    }
    
    /*delete outfit */
    public function deleteoutfit($id){
        $outfit = outfit::find($id);
        if(!$outfit){
            return('error');
        }
        else{
            $outfit->delete();
        }
    }

    
    /*get if favorite */
    public function getfavorite($id){
        $outfit = outfit::find($id);
        return($outfit->is_favorite);
    }
}
