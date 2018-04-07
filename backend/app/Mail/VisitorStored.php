<?php

namespace App\Mail;

use App\Visitor;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class VisitorStored extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * The visitor instance.
     *
     * @var Visitor
     */
    public $visitor;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct(Visitor $visitor)
    {
        $this->visitor = $visitor;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->from('noreply@doctor-pie.com')
            ->view('emails.visitor');
    }
}
