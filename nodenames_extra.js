var nodenames_extra = {

//
// PCM channel
//

// Bit counter

pcm_bits_next0:14194,
pcm_bits_next1:14232,
pcm_bits_next2:14273,

pcm_bits_carry_out0:11555,
pcm_bits_carry_out1:11565,
pcm_bits_carry_out2:11540,
'+pcm_bits_carry_out2':14177,
'+/pcm_bits_carry_out2':11389,

inc_pcm_bits:11538,

// Timer

pcm_timer_eq_0:11541,
pcm_timer_eq_100000000:11539,
'/pcm_timer_eq_100000000':14171,
pcm_timer_eq_100000000_or_res:11524,
'/pcm_timer_eq_100000000_or_res':14157,

// Generated when the timer runs out
pcm_clock:11508,
'/pcm_clock':11382,

// Misc.

'apu_/clk2e':14148,

}

for (var extra_node in nodenames_extra) {
    // Prefer own versions
    for (var node in nodenames)
        if (nodenames[node] == nodenames_extra[extra_node])
            delete nodenames[node]

    nodenames[extra_node] = nodenames_extra[extra_node]
}
