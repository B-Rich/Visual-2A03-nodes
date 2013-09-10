var nodenames_extra = {

//
// PCM channel
//

// Bit counter

pcm_bits_next0:14194,
pcm_bits_next1:14232,
pcm_bits_next2:14273,
'/pcm_bits_next0':14185,
'/pcm_bits_next1':14227,
'/pcm_bits_next2':14266,

pcm_bits_carry_out0:11555,
pcm_bits_carry_out1:11565,
//pcm_bits_carry_out2:11540,
pcm_bits_overflow:11540,
'+pcm_bits_overflow':14177,
'+/pcm_bits_overflow':11389,
'+_pcm_bits_overflow':13850,

inc_pcm_bits:11538,

// Byte counter

pcm_lc_next0:14016,
pcm_lc_next1:13972,
pcm_lc_next2:13914,
pcm_lc_next3:13864,
pcm_lc_next4:13811,
pcm_lc_next5:13749,
pcm_lc_next6:13693,
pcm_lc_next7:13634,
pcm_lc_next8:13569,
pcm_lc_next9:13501,
pcm_lc_next10:13434,
pcm_lc_next11:13360,

pcm_lc_borrow0:11433,
pcm_lc_borrow1:11409,
pcm_lc_borrow2:11388,
pcm_lc_borrow3:11368,
pcm_lc_borrow4:11343,
pcm_lc_borrow5:11319,
pcm_lc_borrow6:11291,
pcm_lc_borrow7:11244,
pcm_lc_borrow8:11209,
pcm_lc_borrow9:11173,
pcm_lc_borrow10:11128,
pcm_lc_borrow11:11096,

//'+pcm_lc_borrow11':11463,
pcm_no_bytes_remain:11463,
'/pcm_no_bytes_remain':11473,

// Sample address

pcm_a_carry_out0:11596,
pcm_a_carry_out1:11624,
pcm_a_carry_out2:11662,
pcm_a_carry_out3:11677,
pcm_a_carry_out4:11698,
pcm_a_carry_out5:11735,
pcm_a_carry_out6:11785,
pcm_a_carry_out7:11824,
pcm_a_carry_out8:11849,
pcm_a_carry_out9:11873,
pcm_a_carry_out10:11895,
pcm_a_carry_out11:11917,
pcm_a_carry_out12:11951,
pcm_a_carry_out13:11978,
pcm_a_carry_out14:12001, // Unused

// Counter/output

pcm_counter0:13644,
pcm_counter1:13574,
pcm_counter2:13504,
pcm_counter3:13428,
pcm_counter4:13350,
pcm_counter5:13289,
pcm_counter6:13255,

'/pcm_counter0':13646,
'/pcm_counter1':11241,
'/pcm_counter2':11203,
'/pcm_counter3':11165,
'/pcm_counter4':11121,
'/pcm_counter5':10999,
'/pcm_counter6':10957,

pcm_counter_next1:13606,
pcm_counter_next2:13534,
pcm_counter_next3:13458,
pcm_counter_next4:13373,
pcm_counter_next5:13303,
pcm_counter_next6:13267,

pcm_counter_overflow:10818, // Renamed
'+pcm_counter_overflow':13837,

// Timer

pcm_timer_eq_0:11541,
pcm_timer_eq_100000000:11539,
'/pcm_timer_eq_100000000':14171,
pcm_timer_eq_100000000_or_res:11524,
'/pcm_timer_eq_100000000_or_res':14157,

// Generated when the timer runs out
pcm_clock:11508,
'/pcm_clock':11382,

// Sample shift register

'+pcm_sr1':13351,
'+pcm_sr2':13424,
'+pcm_sr3':13493,
'+pcm_sr4':13561,
'+pcm_sr5':13630,
'+pcm_sr6':13686,
'+pcm_sr7':13741,

load_pcm_buf:11094, // TODO: Does other stuff too

load_pcm_buf_delayed:11427,
'/load_pcm_buf_delayed':11518,

'pcm_+/sr0':13334, // Typo in nodenames.js

// Logic

pcm_clock_and_bits_remain:11102,
pcm_load_length_and_address:11092,
'/pcm_load_length_and_address':14034,
pcm_dec_length_and_inc_addr:11097,
pcm_copy_buf_to_sr:11093,

// pcm_en is
//   - set by 4015 write,
//   - cleared by reset,
//   - and cleared by set_pcm_irq

pcm_en_out:14061,
'/pcm_en_out':11487,
'+/pcm_en_out':14079,
'+pcm_en_out':14076,
'++pcm_en_out':14075,
'++/pcm_en_out':11444,

// Detects a not enabled->enabled transition
pcm_enabled_while_off:11480,

// Register: Driven high by load_pcm_buf and low by pcm_copy_buf_to_sr.
pcm_buf_has_data:13874,
'/pcm_buf_has_data':11402,

_pcm_buf_has_data:14018,

'+pcm_buf_has_data':13845,
'+/pcm_buf_has_data':11385,
'+_pcm_buf_has_data':13976,

pcm_out_of_bits_and_buf_has_no_data:13961,

// Register:
//   - Cleared by data being copied into the shift register.
//   - Set when the shift register becomes empty and the buffer
//     has no data
pcm_out_of_data:13884,
'/pcm_out_of_data':11406,

'+pcm_out_of_data':13857,

'/(clk2_and_read)_2':13999,

// Register
set_doing_pcm_read:14005,
doing_pcm_read:11466,
'/doing_pcm_read':14029,

'+doing_pcm_read':14045,
'+/doing_pcm_read':11476,
'++/doing_pcm_read':14088,
'++doing_pcm_read':11515,

// Register

read_pcm_sample_reg:14059,
'/read_pcm_sample_reg':14058,

'/read_pcm_sample':11411,

// Misc.

'apu_/clk2e':14148,
'_apu_/clk2e':13969,
'/clk1out_1':13986,
'/clk1out_2':14145,

drive_db4_low:14107,
drive_db4_high:14089,

// Correction - is inverted
'/r4015':10749,

//
// OAM DMA
//

spr_addr_next0:13319,
spr_addr_next1:13391,
spr_addr_next2:13466,
spr_addr_next3:13533,
spr_addr_next4:13598,
spr_addr_next5:13658,
spr_addr_next6:13715,
spr_addr_next7:13773,

spr_addr_carry_out0:11125,
spr_addr_carry_out1:11169,
spr_addr_carry_out2:11206,
spr_addr_carry_out3:11239,
spr_addr_carry_out4:11287,
spr_addr_carry_out5:11317,
spr_addr_carry_out6:11341,
//spr_addr_carry_out7:11366,
spr_addr_overflow:11366,
'+spr_addr_overflow':14033,

inc_spr_addr:11098,

'/(clk2_and_read)':14152,

// Register: Driven high by $4014 write
oam_dma_trigger:14117,
'/oam_dma_trigger':14126,

'+/oam_dma_trigger':14141,
'oam_dma_trigger_and_clk2_and_read':11482,

// Registers: Driven high by start of OAM DMA transfer and low by the OAM
// address overflowing
doing_oam_dma:11475,
'/doing_oam_dma':14047,

'+doing_oam_dma':14071,
'+/doing_oam_dma':11489,
'+_doing_oam_dma':14108,

// Register: Generates a 50% duty cycle clock at half the CPU freq.
dma_clock1:14174,
dma_clock2:14161,

'/halt_cpu_for_oam_dma':14063,
'/halt_cpu_for_pcm_dma':11483,
// Pulls rdy low when high
halt_cpu:14039,

//
// Triangle channel
//

tri_lc_borrow0:10974,
tri_lc_borrow1:11004,
tri_lc_borrow2:11124,
tri_lc_borrow3:11168,
tri_lc_borrow4:11205,
tri_lc_borrow5:11238,
//tri_lc_borrow6:11288,
tri_lc_eq_0:11288,
'+tri_lc_eq_0':13745,

tri_lc_next0:13239,
tri_lc_next1:13280,
tri_lc_next2:13317,
tri_lc_next3:13389,
tri_lc_next4:13464,
tri_lc_next5:13531,
tri_lc_next6:13596,

tri_copy_lin_to_counter:10945,
tri_dec_lin_counter:10948,

}

for (var extra_node in nodenames_extra) {
    // Prefer own versions
    for (var node in nodenames)
        if (nodenames[node] == nodenames_extra[extra_node])
            delete nodenames[node]

    nodenames[extra_node] = nodenames_extra[extra_node]
}
