The following is thanks to this post: https://forum.osticket.com/d/774-enabling-client-closing-tickets/6
* Take the following and add it to ```include/client/view.inc.php```  
```php
//Insert into include/client/view.inc.php right after top opening php tag
if(isset($_REQUEST["action"])) { 
    echo "\n<!--Action is present-->\n";
    if(($_REQUEST["action"] == 'close')) {
        $ticket->setStatus(3); // equivalent to status = closed
        echo "\n<!--Action close applied.-->\n";
    } else{
        echo "\n<!--Close Not possible or not initiated-->\n";
    }
}
```
* Also take the following and add it to the same file  
```php
// Insert the just above edit button: <a class="action-button" href="tickets.php?a=edit&id=<?php
<?php if (!$ticket->isClosed()) { ?>
                <a class="action-button pull-right" href="tickets.php?id=<?php echo $ticket->getId(); ?>&action=close"> <i class="icon-remove-circle"></i> Close Ticket</a>
<?php } ?>
```
* In the same file replace  
```echo __('To best assist you, we request that you be specific and detailed'); ?>```  
with  
```echo __('You can paste screenshots with CTRL+V in the box below.'); ?>```