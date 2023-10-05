/**
 * ---------------------------------------------
 *                    BASIC
 * ---------------------------------------------
 * 1. Do not show the link to them who should not see it
 *  only show to the person/types of user who should see it
 * 2. Do nor allow to visit the link by typing on the url
 *    use adminRoute that will check whether the user is admin or not
 *    if not admin then redirect to any other page. you could logout user
 *    and send them to the login page as well.
 * ---------------------------------------------
 *                  TO SEND DATA
 * ---------------------------------------------
 * 1. Verify jwt token (send authorization token in the header to the server)
 *    if possible use axios to send jwt token by intercepting the request
 * 2. If it is an admin activity. Make sure only admin user is posting data
 *    by using verifyAdmin
 * */
