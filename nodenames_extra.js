var nodenames_extra = {

//
// PCM channel
//

pcm_bits_next0:14194,
pcm_bits_next1:14232,
pcm_bits_next2:14273,

pcm_bits_carry_out0:11555,
pcm_bits_carry_out1:11565,
pcm_bits_carry_out2:11540,
'+pcm_bits_carry_out2':14177,
'+/pcm_bits_carry_out2':11389,

inc_pcm_bits:11538,

}

for (var extra_node in nodenames_extra) {
    // Prefer own versions
    for (var node in nodenames)
        if (nodenames[node] == nodenames_extra[extra_node])
            delete nodenames[node]

    nodenames[extra_node] = nodenames_extra[extra_node]
}
