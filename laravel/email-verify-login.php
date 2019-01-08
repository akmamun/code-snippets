#1 .env file setup
MAIL_DRIVER=smtp
MAIL_HOST=smtp.mailtrap.io
MAIL_PORT=2525
MAIL_USERNAME=<username>
MAIL_PASSWORD=<password>
MAIL_ENCRYPTION=null

#2. AuthenticatesUsers.php change this function

 protected function credentials(Request $request)
    {
        return array_merge($request->only($this->username(), 'password'), ['verified' => 1]);
    }
#For more details see this repository https://github.com/mrxmamun/laravel-5.5-email-verification
