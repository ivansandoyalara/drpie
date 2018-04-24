
function ecLegalId(legal_id) {
    if(legal_id.length == 10) {
        const region_digit = legal_id.substring(0, 2)
        if(region_digit >= 1 && region_digit <= 24) {
            const last_digit = legal_id.substring(9, 10)
            // get the sum of even numbers
            const even_numbers = parseInt(legal_id.substring(1, 2)) + parseInt(legal_id.substring(3, 4)) + parseInt(legal_id.substring(5, 6)) + parseInt(legal_id.substring(7, 8))
            // get individual odd numbers
            let num_1 = legal_id.substring(0, 1)
            num_1 = (num_1 * 2)
            num_1 > 9 ? num_1 -= 9 : null

            let num_3 = legal_id.substring(2, 3)
            num_3 = (num_3 * 2)
            num_3 > 9 ? num_3 -= 9 : null

            let num_5 = legal_id.substring(4, 5)
            num_5 = (num_5 * 2)
            num_5 > 9 ? num_5 -= 9 : null

            let num_7 = legal_id.substring(6, 7)
            num_7 = (num_7 * 2)
            num_7 > 9 ? num_7 -= 9 : null

            let num_9 = legal_id.substring(8, 9)
            num_9 = (num_9 * 2)
            num_9 > 9 ? num_9 -= 9 : null
            // get the sum of odd numbers
            const odd_numbers = num_1 + num_3 + num_5 + num_7 + num_9

            const total_sum = even_numbers + odd_numbers
            const first_sum_digit = String(total_sum).substring(0,1)
            const ten = (parseInt(first_sum_digit) + 1)  * 10
            let validator_digit = ten - total_sum
            validator_digit == 10 ? validator_digit = 0 : null

            if(last_digit == validator_digit)
                return {
                    error: false,
                    msg: null
                }
            else
                return {
                    error: true,
                    msg: 'Incorrect legal id'
                }
        } else
            return {
                error: true,
                msg: 'Region digit must be between 1 and 24'
            }
    } else
        return {
            error: true,
            msg: 'Legal id must have 10 characters length'
        }
}

export default ecLegalId
