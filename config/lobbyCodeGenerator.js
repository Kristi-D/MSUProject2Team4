/* eslint-disable prettier/prettier */
// DEBUGGING ONLY
// const hashSet = ["00000000", "AB90DE23", "DF023F43", "3DFE4E39", "3E32B11C", "FCA2E2EF", "ED82460F", "5A1976AF", "9D7257CF", "DE36F07F", "AFAD236F", "FF4A78BF", "EFDB7BEF", "FE15FE5F", "CD446A0F", "CFDB6C0F", "0961051F", "EE735E5F", "6FDA064F", "182028AF", "707F23BF", "3FB8C5CF", "DDD0320F", "8B5F589F", "0F8C487F", "0E83C7DF", "27F398DF", "3CDB001F", "4F3D71EF", "5FAC3C5F", "0DDC7C9F", "9FB1711F", "737FB41F", "0CB3D1CF", "9E27126F", "5EA6E2AF", "7F8A3BAF", "6E5EA7EF", "ECE7CBCF", "0B52688F", "AE47D02F", "CE03766F", "EBF41E8F", "0A8CEA2F", "CCB9899F", "5DA0166F", "ADAFD07F", "2F7409EF", "B7C10E5F", "CB54042F", "5C1DFCDF", "5B5AB76F", "BF46A38F", "9CC9D92F", "9B9A314F", "6DD2E12F", "2E88A9CF", "5960B70F", "AC9ACBFF", "FD9B4AFF", "3BC1B60F", "1F868FBF", "2DC1BD8F", "CA77B32F", "C9B4A1CF", "2C8DC0EF", "1E3F7D4F", "FBF6CFEF", "1DE9ACDF", "4E541E6F", "EA4AA51F", "9A3FAE2F", "BEA7EEAF", "8FCECE0F", "FAB5688F", "DC2A4ADF", "0825F1AF", "C8BDA36F", "6C8CBBFF", "DBAE416F", "581F1C5F", "DAFDF79F", "BD8C117F", "4D4088CF", "AA470E8F", "E9D7FCFF", "4C4845AF", "0772EECF", "4BA9B3AF", "1C0FA1EF", "4A30DFAF", "06DDBDFF", "8E4AF45F", "7E9AAB9F", "BCF1E56F", "D9F873CF", "C7297B7F", "F99E83BF", "BB130E0F", "3ACC210F", "7D9252EF", "49B68A4F", "7C9E5EBF", "D8C451DF", "2B32C07F", "7BC5CE3F", "9986A17F", "054BE08F", "A956F37F", "987177BF", "BA62142F", "A87274AF", "E8C5AF2F", "48EA59EF", "04CDA4DF", "57D1E44F", "472D0E9F", "B98EA9DF", "7AB4719F", "464DFDEF", "B858CA1F", "030F3FFF", "2AE5EE7F", "975B0EDF", "7971F29F", "D7FD62EF", "02ABFA7F", "F8D3ED5F", "E7A2EC8F", "963E2FDF", "C6C9310F", "8DC5E02F", "F7C5791F", "01DA122F", "8C004EEF", "7810D7BF", "77CD597F", "B6F626BF", "56219A9F", "F6CE2A7F", "E6EFBC0F", "E5C49FCF", "F572FA7F", "39E9D34F", "4590C9FF", "7635C5AF", "4431AEFF", "95A27A3F", "C54C4F7F", "A7C53A3F", "1BE1FEBF", "38AB07BF", "05F5BD5F", "37CB7CDF", "361584DF", "0FFDD6EF", "0EF5857F", "B5FD085F", "E442BE6F", "29510F4F", "356835CF", "34F7BD2F", "28A56FEF", "94820F6F", "E309FFFF", "1A80F6BF", "C43C2EEF", "0DF5C62F", "E2EBD15F", "D6C6E91F", "4377D11F", "B4594A8F", "8A51B05F", "93DFE12F", "75C632DF", "A6BD635F", "929B511F", "2682344F", "0CFBB83F", "0BFE60FF", "19742A0F", "0AF924FF", "910196EF", "1718B73F", "6BEFAC8F", "89AE4ADF", "D5E7D1AF", "B36B23EF", "F4D7002F", "42EEFAEF", "C35EFF3F", "88B31E8F", "E1DF120F", "55DC90BF", "E0EFA25F", "33E62FEF", "32F017BF", "09FA6C8F", "A5CMFMMF", "F3AEIFKF", "KAEOQMBF", "JFEQFAHF", "IGJAIJGF", "ODQFBQHF", "KFBMFEKF", "MGPMIAKF", "LFQLHPEF", "GQLHDMQF", "F2LFDKKF", "IFMDFIMF", "KEKMQCKF", "C2AOCFJF", "PKJMMFBF", "OFQKHJMF", "QKGKIMEF", "F1HAMJPF", "B2HMQOQF", "IEGFDOGF", "QFEKMDJF", "QEGQDIFF", "JEAKOCCF", "LEGFPAPF", "QDCDDKEF", "F0GPCBQF", "EJKMMDMF", "D4KFAQIF", "MFOABHAF", "HBOKPIGF", "HFBMMHEF", "GFFGAEIF", "LDIOHGQF", "EFFHKOAF", "QCGDJOBF", "QBDIKDFF", "B1LOFAPF", "KDLMCKCF", "LCKKDEGF", "LBBPMGIF", "KCKFGGBF", "D3OPFBPF", "D2LMABFF", "MEJOFAJF", "GEOOLIBF", "IDICMHAF", "MDOGGBFF", "GDDQLDLF", "QAAIGJIF", "FCFCEJCF", "B0LBOPKF", "Q9OKHAEF", "C1ABCJDF", "FFFQBFBF", "JDAGOBHF", "EEFPCKEF", "D1KAAKPF", "HEJEQMQF", "PFDBLBOF", "OEEPCKQF", "ICMPFPHF", "OCOOEFKF", "KBQGGACF", "PEILFQFF", "PDDIEJOF", "A4OQKICF", "C0MIKOHF", "HDCLKPDF", "K9HLFCMF", "Q8EGCGMF", "A3EFHQBF", "HCJHLJOF", "JCFBPQPF", "HADDJPGF", "PCHFBJGF", "K8CFHFEF", "Q7PHQOHF", "H9AFEFGF", "K7BMFJHF", "CLEHOAGF", "FEFLKJAF", "D0IHEOJF", "LAHAJAJF", "PBAHKPEF", "L9DMGLFF", "FDFDQFKF", "EDFHKMIF", "H8QQPKCF", "CFFEKGOF", "MCFHCOCF", "A2QJCQCF", "JBMKADJF", "GCHHEAKF", "Q6DGKJLF", "CEPAHPOF", "OBJLPQMF", "IBQPMGGF", "DIHBPBOF", "FBEMQGPF", "A1KILQOF", "IAKGIEIF", "PAJIPBJF", "JAMKJOHF", "FAFBBQPF", "GBPAQJIF", "H7QBDFLF", "CDFLHFIF", "MBGAADGF", "CCFLPDKF", 
//   "BJBJIFLF", "A0COBEQF", "CBFPIMHF", "J9MKMAEF", "ECFMJHPF", "GAOGJGPF", "F9FLKAGF", "H6FHKIPF", "L8LBCBCF", "F8FAFPEF", "P9PFAEDF", "MAOMBJOF", "BFFOCELF", "H5OKIEMF", "OAJBFQBF", "K6BGLBMF", "Q5FBPPBF", "I9MBJCQF", "Q4OLFBMF", "DFBQJHFF", "DEFBECGF", "CAFPHKJF", "AGIPOGIF", "L7PPDHMF", "J8LECLOF", "H4LAGOOF", "F7FAQDEF", "P8OMGAEF", "C9FAPEGF", "Q3QFLMPF", "P7HHHIDF", "J7BHIDGF", "K5EGILHF", "DDFAGDAF", "M9FHEBGF", "F6FJBKBF", "G9JIMLOF", "J6PDOQMF", "K4QMACIF", "P6HBEMOF", "P5AEQQJF", "F5FCFBMF", "G8JAJAJF", "H3GPEIBF", "F4FLQLGF", "H2OOMCPF", "I8JLHOBF", "Q2CLPBHF", "G7IMJMPF", "P4DGGKHF", "Q1DELCFF", "DCFEAHOF", "C8FPPDOF", "F3FCLQGF", "H1LJGKCF", "K3KOKFQF", "L6HOGPIF", "C7FAIEHF", "P3PMPLDF", "Q0KLCOOF", "O9BBBJQF", "C6FKBEGF", "EBEMEJIF", "M8QEGEBF", "QFFBDCAF", "K2JMBPAF", "G6KKHIDF", "F2FOPPHF", "H0PBLBGF", "F1FIFLLF", "AFFQILCF", "QEFBLKAF", "HBFIGFBF", "K1QQOIQF", "AEFGKPEF", "ADFFAQDF", "K0CQJBQF", "KAFEQEQF", "G5IKDAMF", "HFFMEKIF", "J5OGFAOF", "ACFPCFCF", "G4IBDIAF", "L5GCBBQF", "KFFBDOOF", "F0FLOKFF", "C5FEKPOF", "EAFIADOF", "L4OBOAFF", "C4FFAHGF", "L3HDFOQF", "M7ECMHAF", "HEFIAJKF", "P2FEMOBF", "M6EKKCKF", "P1HOJGJF", "G3JPKLBF", "BEFBEMAF", "G2MBGJFF", "E9FOQAGF", "L2GMQQCF", "DBFMCBHF", "DAEKECPF", "QDFPLICF", "G1GBHAAF", "O8KBCQMF", "C3FLCHQF", "M5DPFEFF", "D9ELLOLF", "O7JOKQQF", "J4MLHPHF", "QCFCHGMF", "HDFLCLQF", "M4QBOLKF", "QBFOJQAF", "G0OICGGF", "GFECLLLF", "BDFFEQIF", "D8FMGEJF", "E8FOKAGF", "D7EEJEQF", "D6FEADMF", "ABFLPKIF", "I7HLQHBF", "D5FEIKFF", "FGLGQCGF", "D4FFHHFF", "L1GADOMF", "KEFAJLIF", "E7FJMEEF", "HCFQDGOF", "M3EMILDF", "O6QJJJHF", "AAFDALDF", "GEFMMGHF", "BCEEILPF", "J3ELHDAF", "M2QCHHGF", "O5LIJBIF", "M1JDAMCF", "J2PIDAGF", "QAFGDOPF", "KDFPJQKF", "P0JKBBMF", "Q9FMOQMF", "BBFJOCQF", "J1EPCFHF", "FGFHHBPF", "L0LJPAHF", "E6FMBIKF", "KCFQPLEF", "O4GQQMKF", "D3FFMCMF", "J0LCAOGF", "FGEAJELF", "JFFQBAMF", "PFFGDIEF", "O3QIIKBF", "I6GKOOPF", "PEFOBMBF", "A9FQHDQF", "GDFCJKLF", "BAFJEFMF", "Q8FEKCCF", "I5CECIBF", "B9FQICEF", "GCFMBOBF", "D2FIOGCF", "HAFKBAOF", "FGDFFLEF", "I4EAHABF", "PDFIFJQF", "LOBOAMBF", "JEFHFGBF", "JDFOQOOF", "B8FOOGFF", "JCEIQGGF", "A8FJOOGF", "E5FAJQCF", "C2FGEEQF", "FGCDMKMF", "PCFKIGFF", "GBFCPCKF", "H9FGLIDF", "GAFGDFOF", "PBFELJCF", "M0ABQAQF", "LFFAHAGF", "A7FBODEF", "MFFBGCJF", "G9FALADF", "FGBGABFF", "Q7FLBFMF", "C1FKIPLF", "MEFEFKBF", "H8FFOGCF", "O2DBHIPF", "O1QHPDJF", "C0FHCOGF", "E4FCJQOF", "MDFHJCCF", "KBFJMEKF", "H7FDEILF", "H6EFQGLF", "Q6FGJFAF", "G8FFPBEF", "B7FJBDIF", "JBFAMHDF", "CGBADQLF", "E3JQJBGF", "JAFHMLMF", "CGFDCLCF", "PAFJPMLF", "I3OOADQF", "J9FBIJGF", "K9FFQILF", "D1FCHBOF", "I2HEICMF", "Q5EBECKF", "B6EGQOLF", "K8FEMOIF", "LEFPEALF", "D0FGMICF", "Q4FAMKJF", "E2FQEAKF", "E1FFLGAF", "E0FFCECF", "H5FADHHF", "MCEHHDCF", "J8FODPDF", "DGDJIJEF", "MBFMMJAF", "CGEIPQPF", "A6FMFIKF", "I1BHCEGF", "EGPFDPBF", "EGFFEFIF", "O0DFFFQF", "K7FBCEMF", "EGELDIEF", "P9FIKLMF", "A5FDGBOF", "K6FKKFIF", "LDFLMHKF", "I0PAGPLF", "K5FEFOIF", "FGADQAPF", "CGDHHIAF", "EGDQHCGF", "B5ELDAIF", "EGCFHEJF", "G7FIQQPF", "B4FBILPF", "P8FGQJEF", "Q3FBOBQF", "LCFILEQF", "P7FEHIBF", "IFFBLKFF", "CGCCJJJF", "DGFOQOHF", "MAFCKQFF", "B3FFDKJF", "OFFEBLBF", "H4FPMLJF", "K4FHPDFF", "IEFFHEMF", "H3FOGCLF", "IDFEBICF", "P6FPJMDF", "K3FFLAGF", "CGAQAIMF", "ICFQCCAF", "OEFPOCEF", "M9EJGHGF", "B2FHGMFF", "M8FQKAAF", "M7FCIEGF", "DGEMIHHF", "LBFPIDMF", "B1FGMFOF", "DGCFMGGF", "J7FPEIJF", "B0FOOMLF", "EGBGDFPF", "H2FLAGQF", "DGBDBABF", "LAFIFHQF", "Q2FDJQFF", "L9FFELCF", "BGIMHMIF", "IBFLLFAF", "G6FJFMEF", "BGFCHPIF", "L8FPMPLF", "CG9APGMF", "Q1FFQQDF", "EGAGOPMF", "P5FQLOCF", "FG9EQHBF", "ODFQGPMF", "A4FEIADF", "FG8GMMOF", "H1FLBODF", "BGEOGMCF", "CG8FJBKF", "K2FLGMCF", "J6FIKHBF", "Q0FEBEAF", "CG7FFGBF", "H0FPQBCF", "FG7BHMLF", "J5FCCOPF", "DGAELGAF", "CG6LECIF", "FG6LIPLF", "DG9GCOMF", "BGDEEDMF", "M6FHIGQF", "HGBLDBLF", "CG5BFQMF", "G5FBPFDF", "HGFBJKKF", "FG5AEQCF", "DG8MMEIF", "DG7OFEEF", "HGEFMKDF", "A3FFMLEF", "HGDEDQPF", "M5FMLKHF", "CG4DCLQF", "J4FKKACF", "FG4HBGFF", "G4FIFGGF", "P4FKCAIF", "A2FHKGKF", "L7FLLAKF", "K1FIHEGF", "K0FOIIIF", "BGCABQIF", "HGCBKDHF", "BGBGHFCF", "J3FEMMMF", "J2FGACGF", "OCFJLGDF", "OBFLGQJF", "KGIHOGFF", "BGAJHGFF", "CG3BHOIF", "L6FLMIAF", "J1FOJAKF", "IAFLAFPF", "FG3DAQCF", "KGFGEEPF", "G3FGOCIF", "J0FKKHCF", "EG9GOEAF", "DG6GJEPF", "KGEDAPAF", "FG2LKHLF", "BG9APJKF", "EG8KCPKF", "FG1KIOJF", "P3FKOAHF", "L5FLDAJF", "A1FMOJDF", "G2FKDIBF", "CG2LFGGF", "HGAKPPGF", "G1FAHKFF", "I9FBAQKF", "DG5IPJOF", "FG0AEBIF", "FGFFMIAF", "G0FOHKEF", "OAFIKDPF", "O9FLMOAF", "HG9BJHLF", "CG1LBFKF", "DG4KJCKF", "EG7EADLF", "KGDGEHOF", "EG6JHOOF", "QGADMKMF", "HG8DIPEF", "L4FILFLF", "O8FODDQF", "DG3BIJIF", "FGEFBKPF", "JGCIMCQF", "I8FJIEEF", "A0FFJQMF", "JGFPPQLF", "DG2MDKCF", "P2EDMOAF", "FGDEJMQF", "FGCFIOGF", "CG0LMOFF", "CGIFQLHF", "JGEBJMMF", "GGKKBPKF", "JGDOAHJF", "L3FIFIEF", "DG1ICPBF", "HG7IKHPF", "HG6BAAGF", "KGCDOBAF", "QGFEIHFF", "FGBFOKMF", "L2FCJOQF", "I7FCMIPF", "FGAFBQFF", "EG5EQOIF", "CGFFHIKF", "O7FABPBF", "QGEEFKGF", "QGDCIPGF", "KGBJPEGF", "O6FOEHKF", "I6FFDJHF", "QGCPACHF", "AGFFAAOF", "KGACBAKF", "M4FQQMGF", "JGBHJLFF", "QGBKKIQF", "HG5MMEPF", "EG4GBPQF", "AGEAPPQF", "GGFQMQHF", "QG9FBDMF", "QG8MQEMF", "EG3ALBQF", "KG9LLEJF", "DG0IDFLF", "BG8DGHGF", "FG9FJKJF", "JGAPEEEF", "O5FCKDCF", "I5FHPMQF", "O4FFFMKF", "DGIIILGF", "AGDFGOAF", "CGEFCEIF", "CGDFKDIF", "I4FQGLLF", "BG7HHLCF", "O3FJDJFF", "QG7PHLAF", "KG8DHQCF", "HG4GJFJF", "JG9PGPQF", "FG8FKFHF", "DGFFLFOF", "JG8DMKEF", "FG7FKEQF", "CGCFKFEF", "P1FMMPHF", "M3FPLLDF", "AGCMMDOF", "GGEHJDMF", "L1FQAJAF", "HG3OEEJF", "P0FGIKAF", "FG6FQHAF", "FG5FPQBF", "BG6AQEKF", "I3FAAMBF", "AGBOMOQF", "O2FEKBJF", "AGABGKQF", "O1FLHMMF", "KG7APJHF", "O0FIOHMF",
//   "OGJAPIGF", "OGFPHFCF", "L0FHMKAF", "I2FBIKIF", "DGEFPCCF", "PGIBLFHF", "QG6HGBGF", "FG4FKOKF", "QG5IPAAF", "EG2AOLBF", "DGDFAELF", "LGOPJEQF", "FG3FMEPF", "I1FIGOOF", "KG6FMMJF", "HG2HOIPF", "AG9IEIGF", "AG8FQFBF", "FG2FGCGF", "GGDPAGEF", "JG7LLLOF", "HG1KIPLF", "CGBFCJHF", "JG6QBELF", "CGAFBHGF", "PGFQMKMF", "BG5BQKEF", "BG4EQKJF", "GGCMFPFF", "JG5DQKMF", "JG4MCAFF", "LGFILHMF", "AG7CIHOF", "M2FIFGLF", "EG1HCBAF", "M1FKIJAF", "AG6IAMGF", "FG1FELJF", "GGBQFCLF", "M0FPHKCF", "HG0EDDOF", "GGAIMKKF", "KG5OLCGF", "BG3HCAEF", "CG9FGFLF", "GG9EKDAF", "OGEIEPPF", "AG5QCQQF", "GG8DCFCF", "OGDQAFPF", "QG4JJKJF", "DGCEEBHF", "MGFEMFEF", "GG7BAFJF", "OGCHBGFF", "DGBFKHMF", "DGAFDBIF", "QG3HQCCF", "QG2MBAQF", "PGEGCFIF", "AG4HCAGF", "FG0FPDLF", "QG1MLCHF", "FGGPMHLF", "LGEBMEAF", "OGBOHAMF", "FGGFEQIF", "PGDIOOMF", "OGAEABPF", "DG9FKGAF", "EG0EFDJF", "CG8EAGDF", "KG4MOKAF", "BG2JKBDF", "LGDOFLGF", "KG3FOFBF", "BG1LBLJF", "DG8FEOCF", "OG9FHKFF", "JG3CJHBF", "JG2FLGPF", "KG2IBCEF", "LGCEKBHF", "AG3HOPQF", "FGGEQLCF", "MGEJIDPF", "PGCGDDGF", "KG1MJBEF", "FGGDHMOF", "DG7FBHQF", "AG2CIBMF", "GG6PDIJF", "HGFFKECF", "LGBMOHDF", "KG0OQBJF", "KGFFCABF", "HGEEJAEF", "LGADFCAF", "BG0QBKLF", "EGFEOHDF", "HGDFGKMF", "HGCFQFDF", "I0FIGFBF", "BGFFGBIF", "GG5LKGKF", "DG6FPQBF", "BGEFCKFF", "CG7EFDMF", "PGBKFPFF", "AG1ALQCF", "AG0PQHOF", "HGBFLGFF", "HGAFPJEF", "IGFKFFPF", "LG9FLFAF", "KGEFCGFF", "JG1JMHOF", "OG8GIGJF", "LG8CJBHF", "AGFEOEDF", "HG9FADOF", "BGDFBQLF", "QG0GIOOF", "DG5FCJIF", "CG6FICGF", "KGDFLPEF", "HG8FHMPF", "HG7FAAKF", "IGECGDGF", "CG5FACCF", "HG6FKMIF", "GG4HIOIF", "PGADCLAF", "OG7DKDCF", "HG5FGCEF", "PG9KMOAF", "EGEFLQGF", "MGDGKQJF", "DG4FPIEF", "HG4FIPKF", "QGKOFCDF", "JG0JAJLF", "MGCHOGAF", "BGCFADAF", "JGJMGFFF", "QGFFQFAF", "EGDFQMEF", "BGBFQELF", "KGCFGQIF", "HG3FBEHF", "AGEFPPPF", "LG7LDQIF", "EGCEHPMF", "KGBFBKLF", "LG6PLKMF", "DG3FBAPF", "KGAFKIEF", "MGBLIBBF", "GG3MMGLF", "FGGCQPLF", "FGGBPADF", "DG2FCDGF", "FGGAOKHF", "EGBFOIJF", "EGAFJLAF", "EG9FAEBF", "QGEFJOLF", "QGDFBHKF", "DG1FFAOF", "LG5GPFQF", "AGDEIFKF", "OG6IIFCF", "IGDFOAIF", "LG4JCGMF", "FGG9QMFF", "OG5BAKKF", "IGCIOOJF", "GG2LOJLF", "LG3MPAJF", "DG0FAEPF", "AGCFKQMF", "JGFFPKQF", "IGBKMKCF", "FGG8IJMF", "BGAFIIDF", "GG1BGOJF", "GG0MGMHF", "BG9FKODF", "AGBFFAAF", "BG8FICMF", "JGEFPGQF", "PG8MEKHF", "FGG7LALF", "JGDFLHPF", "GGFFDDPF", "KG9FEPKF", "LG2ADBIF", "KG8FFDBF", "HG2FHKGF", "MGAEDQKF", "GGEFOLJF", "CG4FDJPF", "KG7FKEEF", "MG9POBFF", "PG7JQIAF", "JGCFMMIF", "FGG6JBJF", "GGDFLBIF", "QGCFMOIF", "OG4KAQMF", "JGBFADFF", "DGGOMOMF", "MG8EOFBF", "MG7PAFBF", "IGABBQMF", "LG1CKLGF", "QGBFQABF", "DGGFFQCF", "QGAFLPAF", "GGCFFEHF", "DGGEBGFF", "EG8FMHQF", "AGAFPKJF", "IG9KAHGF", "FGG5JGDF", "PG6EJLMF", "MG6DKOLF", "EG7FPBJF", "IG8AMFOF", "KG6EOAQF", "PG5AADBF", "MG5FMBFF", "QG9EHAEF", "IG7GBEOF", "MG4JHPAF", "MG3AKOAF", "LG0EIFKF", "CG3FJKLF", "IG6LFIGF", "PG4FFGAF", "QG8FHMHF", "HG1FJKAF", "JGAFBJGF", "KG5FBFOF", "JG9FJPBF", "MG2JAHHF", "BG7FEHKF", "FGG4OBOF", "KG4FCAOF", "IG5DQDFF", "MG1ACJJF", "DGGDJMAF", "DGGCECEF", "EG6FJKBF", "CG2FIAOF", "AG9FBFDF", "CG1FHFEF", "BG6FQEIF", "HG0FBICF", "BG5FJEKF", "GGBFOCOF", "EG5FHFAF", "QG7FBIBF", "LGFFQCOF", "AG8EOPLF", "CG0FPFDF", "LGEFFAIF", "OG3HLLKF", "EG4FCKIF", "LGDFCPOF", "QG6FDPEF", "LGCFGBFF", "PG3DEPBF", "EG3FAQPF", "DGGBPFLF", "HGGKGKHF", "LGBFFFBF", "JG8FGMHF", "CGGQOIDF", "OG2MEODF", "FGG3AODF", "JG7FDKDF", "KG3EDDFF", "QG5FLFOF", "MG0CIIIF", "AG7FOGBF", "IG4OLDGF", "LGAFIIOF", "OG1AGJQF", "CGGFHKBF", "GGAFGBOF", "JG6FFAQF", "HGGFDCAF", "FGG2JJKF", "CGGEKHKF", "GG9FFHQF", "IG3EBALF", "DGGABMKF", "EG2FDEMF", "IG2HPOGF", "OG0FJLOF", "JG5FAIJF", "IG1GCHPF", "AG6FMBAF", "HGGELIIF", "BG4FBCKF", "PG2HCPMF", "IG0ECQAF", "KG2FBIQF", "FGG1EQLF", "GG8FADCF", "LG9EQMMF", "LG8FEEDF", "MGFFPCKF", "JG4FIJGF", "OGFFCDIF", "EG1FJLOF", "JG3FGJBF", "PG1DHQCF", "BG3FHCBF", "BG2FEGJF", "CGGDOCBF", "JG2EGGPF", "MGEFPLLF", "QG4FBMLF", "JG1FFMLF", "JG0FAAMF", "JGGJKDLF", "CGGCDLGF", "PG0PBBCF", "LG7FEPDF", "FGG0KFQF", "JGGFFECF", "MGDFFMOF", "OGEFILPF", "PGFFBAFF", "QG3FELDF", "QG2FPODF", "MGCFAHEF", "FGGFFJPF", "KG1FOCBF", "CGGBLHQF", "JGGEIIKF", "MGBFAQPF", "PGEFPJCF", "HGGDMOCF", "OGDFJKPF", "QG1FHJJF", "QG0FFKIF", "PGDFJPLF", "QGGGQAMF", "HGGCCQHF", "JGGDHLFF", "HGGBEOAF", "JGGCHECF", "PGCFIJBF", "OGCFPHGF", "BG1FPJJF", "PGBFJGCF", "MGAFDMIF", "JGGBIHGF", "DGG9JKJF", "DGG8PFPF", "PGAFICJF", "CGGAGFEF", "PG9FGCKF", "IGFFKHPF", "KG0FPQFF", "MG9FDPCF", "JGGAAICF", "EG0FPIEF", "KGGLQIKF", "MG8FLJBF", "EGGBKMPF", "HGGAHJOF", "EGGFCBQF", "HGG9QDLF", "OGBFGOFF", "HGG8JFIF", "IGEFCDMF", "KGGFMEPF", "JGG9KKHF", "OGAFFFHF", "JGG8PMPF", "MG7FDHKF", "LG6FIKJF", "HGG7EJGF", "CGG9JDOF", "FGGEFCKF", "JGG7PEMF", "GG7FDBPF", "AG5FMKJF", "JGG6KFMF", "FGGDFLOF", "KGGEFOEF", "MG6FIKBF", "GG6FLAPF", "KGGDQMEF", "AG4FJQCF", "PG8FAQCF", "FGGCFBKF", "AG3FLJKF", "AG2FLPJF", "KGGCHOAF", "QGGFEFEF", "FGGBFLPF", "BG0FJHGF", "EGGEJQCF", "BGGEBKFF", "PG7FOADF", "HGG6GHDF", "EGGDIJCF", "EGGCHKOF", "CGG8GGMF", "BGGFOEDF", "OG9EEILF", "BGGDMBFF", "LG5FEKLF", "QGGEEEDF", "IGDEBFOF", "LG4FCEHF", "DGG7PMEF", "OG8FEJJF", "BGGCLOQF", "AG1FIEJF", "QGGDADPF", "EGGAEHAF", "MG5ECDHF", "MG4FHAOF", "JGG5MQGF", "MG3FFLJF", "OG7FIAIF", "IGCFGHOF", "GG5FKIJF", "PG6FOGHF"];

function hashLobbyId(hashSet, charSet) {
  function randRange(lowerLimit, upperLimit) {
    return Math.floor(Math.random() * (upperLimit - lowerLimit) + lowerLimit );
  }
  function retraceWord(leafNode) {
    let currentNode = leafNode;
    let word = "";
    while(currentNode) {
      word += currentNode.value;
      currentNode = currentNode.parent;
    }
    return word.split("").reverse().join("");
  }
  const running = true;
  // DEBUGGING ONLY
  //const charSet = ["A","B","C","D","E","F", "G", "H", "I", "J", "K", "L", "M", "O", "P", "Q", "R", "S", "T","U","V","W","X","Y","Z"];
  const dictionary = {};
  const startIndex = randRange(0,16);
  dictionary[charSet[startIndex]] = {
    value: charSet[startIndex],
    leaf: true,
    parent: null
  };
  let currentNode = dictionary[charSet[startIndex]];
    
  // Run through tree
  while(running) {
    const currentWord = retraceWord(currentNode);
    if(!currentNode.charCounts) {
      // Get the frequency of characters that appear next
      currentNode.charCounts = {"0": 0, "1": 0, "2": 0, "3": 0, "4": 0, "5": 0, "6": 0, "7": 0, "8": 0, "9": 0, "A": 0, "B": 0, "C": 0, "D": 0, "E": 0, "F": 0};
      for( let i = 0; i < hashSet.length; i++ ) {
        if (hashSet[i].startsWith(currentWord)) {
          currentNode.charCounts[hashSet[i].charAt(currentWord.length)]++;
        }
      }
    }
    /** console.log(
  `========== Generating LobbyCode ==========
  Hashes: ${hashSet.join(", ")}
  CurrentWord: ${currentWord}
  Children: ${JSON.stringify(currentNode.charCounts, null, "\t")} 
  ` );*/ 
    // Find least common character
    let lowestChar = {
      char: "G",
      count: 1
    };
    let changed = false;
    for (const char of Object.keys(currentNode.charCounts)) {
      if (currentNode.charCounts[char] <= lowestChar.count) {
        lowestChar = { char: char, count: currentNode.charCounts[char] };
            
        if(currentNode.charCounts[char] < lowestChar.count) {
          changed = true;
        }
      }
      else{
        changed = true;
      }
    }
        
    // Pick random char
    if (currentWord.length === 7) {
      if (lowestChar.count === 0) {
        currentNode[lowestChar.char] = {
          value: lowestChar.char,
          parent: currentNode
        };
        return retraceWord(currentNode[lowestChar.char]);
      }
      else{
        // Start again at root
        currentNode = dictionary[charSet[startIndex]];
      }
    }
    else {
      // If the char has unequal charCounts then move to the lowest
      if(changed) {
        currentNode[lowestChar.char] = {
          value: lowestChar.char,
          parent: currentNode
        };
        currentNode = currentNode[lowestChar.char];
      }
      // Else pick a random one
      else {
        const randChar = charSet[randRange(0,16)];
        currentNode[randChar] = {
          value: randChar,
          parent: currentNode
        };  
        currentNode = currentNode[randChar];
      }
    }
  }
}
  
// DEBUGGING ONLY
// setInterval(() => {
//     hashSet.push(hashLobbyId());
//     console.clear();
//     console.log(`
// ========== Generating LobbyCodes ==========
// Hashes: ${hashSet.join(", ")}
// `);
// }, 10);
// /**
//   function verifyHashSet(hashSet) {
//     const seen = [];
//     const duplicates = {};
//     const set = hashSet;
//     // For each item in the hash set
//     while(set.length > 0) {
//       // Get next entry
//       const entry = set.pop();
  
//       // If entry has already been catalogued, it's a duplicate
//       if(seen.includes(entry)) {
//         if (duplicates[entry]) {
//           duplicates[entry].count++;
//         }
//         else{
//           duplicates[entry] = {
//             count: 2
//           };
//         }
//       }
  
//       // Push entry to seen array
//       seen.push(entry);
//     }
  
//     return duplicates;
//   }*/
  
// const obj = verifyHashSet(hashSet);
// console.log(hashSet);
// console.log(`Duplices of the hashSet (size ${hashSet.length}):
// ${JSON.stringify(obj,null,"\t")}
// `);
  
module.exports = hashLobbyId;