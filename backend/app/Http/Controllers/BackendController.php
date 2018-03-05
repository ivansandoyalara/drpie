<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class BackendController extends Controller
{
    public function login()
    {
        if(Auth::check())
            return redirect('visitors');

        return view('login');
    }

    public function processLogin(Request $request)
    {
        $this->validate($request, [
            'email' => 'required|email',
            'password' => 'required',
        ]);

        if (Auth::attempt(['email' => $request->email, 'password' => $request->password])) {
            // Authentication passed...
            return redirect()->intended('visitors');
        }

        return back()->with('error', 'error');
    }

    public function logout()
    {
        Auth::logout();

        return redirect('/');
    }
}
