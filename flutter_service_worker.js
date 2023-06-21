'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "e0371468885829d9e686dbe15e2e578f",
".git/config": "917dcccbbe811f7b63a73c7013e27671",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "6fab1f7ee9f33d773fc1676d44583795",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "da5a2c232feeafe10406261ae4f25c2a",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "16f3a80023cbf1cc29451ccd881dafb9",
".git/logs/refs/heads/master": "16dfec4bfc07618c7af50924395b58f1",
".git/logs/refs/remotes/origin/master": "1c6a903195c230c9ee54226ccf2e90c2",
".git/logs/refs/remotes/web/master": "4cd42d3f6bb4974b7849a0260931d32d",
".git/objects/00/6c23634151c2c35d84ee14b97ad7e2824fe49d": "5b33aa96427f7ff6ee1bf6fe48a4ed07",
".git/objects/01/34f1368dc8ac41d17c0399ba4c29ce0a55d913": "9e02488a0744d14febfef9a69460af91",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/04/5851c10bdabecba547a4bf9ee927ffdab31204": "feaf8cbbc5a374c7cd94a045a551e285",
".git/objects/07/80e72ad18d8c585566d3bc60e6e0a2fc5dda92": "439947e5acc5652e4a4814dd2e9200ef",
".git/objects/08/5a543c752fc2e4792afb82209c9fee2972c0cf": "59f6384993b3c0ce1c6294a10b44f06f",
".git/objects/08/be606726cf026259591466d2ffe792a1aca3a6": "4b849e94b7af3d2b2fc378fe1248495e",
".git/objects/0a/00d2b93b52ce95a0370b4b211d48e30252f2e1": "8f0f83b026888203e9148488332f89b5",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/0d/366041fb120b68dadd56aadbbb34ca86338b21": "6ae8e3f855813b30b590f6a32032eac3",
".git/objects/11/ebe0abf0e894a859e0fb58e7eae195cda45183": "a448adc1da0456db701dc50d773d932a",
".git/objects/12/41203f5bf7aea0c3c40d6df180d621822b6578": "93bd3f33d6c3aea899c72dd9387df10f",
".git/objects/15/760ed76d6ac5e4555e19a7447b789355000edf": "057d989348648776d9ff51836c9757f4",
".git/objects/19/118e1767cfbbf31b7c6857b523da3c678907c6": "493c794eeb9b2f828ff3d2877effd87a",
".git/objects/19/150bf5747a93a299fac6740169ce84c0fa0c55": "257d0fe288bea26ca365f33ca20b3f4d",
".git/objects/1c/66200254bc58d2c452c9d03595d05e923e5e05": "dc43577501ad6636fc2557bc5aa95be9",
".git/objects/1c/d0221ae7a7bd367afd6e351858449608ab971d": "8e2973179d3fe1e91c02e829cd2b8251",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/1d/fae031869dc992a8a5ba89be31e0bbc6cd4f97": "dc239a6a7dea2b46b7636582c5510cd4",
".git/objects/1e/0f124a4973d64d46ff3a2bdf758be907ba6635": "18ef627bbb4b9d63194394b5931b2665",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/1f/686edd1465272558af328ca43cb7189a0059e6": "5e83820f6d3e5392693d45bc239b2b61",
".git/objects/23/9eade5d09539c2c902fd0b66d1d59363e0c4ec": "3540b08a61922dff9dc02f4d6b4dc03d",
".git/objects/23/b9ee435ae8d551fb463a1b84d3fe34bf6bc521": "18521fa37e5ab6e0676c3e38216d86e5",
".git/objects/24/06a63fd0f00ff300a250dee93863c9d32283e9": "2212df28f90b8fe47fcfbc0e942e60c7",
".git/objects/24/94297c9b1aa2e43fa0acc862cd1e140078a70a": "f453921a62ebb39ec71a348d3ebaa996",
".git/objects/26/e4a8ca5358f6f1da6aeb26e7acd5b7e619ad92": "1654c495a45b3fe39c584df91ac57de1",
".git/objects/27/2ae9ed6e1a4c8b8a16fb5ab59d9325fc79d613": "4eed0b5849d5f6f57bba42c98f764266",
".git/objects/29/83bda9aa60d9c35c3d447d3e22ea3ff34cd396": "cd8b4064d2dd40001c268abcb532aa2b",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/34/d8040f83ba17c4dd27681e98a1333dadf8b094": "e889f8a9236ab898c770bf9047f88fdd",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/37/ed80775eb781442a3157357ee2b443bc1259d9": "a4c8e8d937f07a9109ca684e73a19457",
".git/objects/39/38b9ab1373bb29b1bb661942bc53db5af76ebf": "314455ddb138790aae9709342f567348",
".git/objects/3a/dcb87e3933d3d7c331d30a305185c61c876fd3": "23c6aee91fedc4e8a1458912f1f96893",
".git/objects/3b/4cfd2c1bb0c39bfcd490e149a5aa13b45fec6c": "a7d066bd57f6130d7fd051f58cb7ee3d",
".git/objects/3b/8fc5a1c16b57b1e385ac0d9156c32339279b7a": "6d4bdfdc86aaf6506819d4e17be7f133",
".git/objects/3c/b3b53a24ee4712b8463133dca203ddd72fb43b": "c3066eae2c84f5465b93f0624f5ecfa6",
".git/objects/3e/1458e4793583fee756d2f0b81f8c0cb49ce157": "43a62b89a8200d44e0b9f3ea93f3d5d5",
".git/objects/42/615741813df6e5ea958819433684e9ebe3d65a": "dfb34726132a35f0799a3332962dc7bb",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/aaedb50ee1ca71194d7472dfcd8e8a1843e3d1": "98a0166f7a6ae45903ef0295ca66762f",
".git/objects/47/79dadd118bc78580d92c1db960ee3a58739c60": "7b0a323d08be2931eaf68c8a580fd699",
".git/objects/49/cfcc3d91e07ad7027150685dd39249d160bcb3": "b1deb8e452619d967a8f077025d736d3",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/51/f65d4f23eb34b93b59b748fdcd8b3f97f3670d": "0bd295e2157ca7e2895d5b2a4f6942c4",
".git/objects/53/2f245365b60f7265975c23ba52f7e81d96a0ee": "afc0733ca4d3609c7396278a1a4b01c3",
".git/objects/55/de0b11a60fe0986278bb133086fbd33a637be7": "48d9c2f188e9f0b0cc267b0bae87920f",
".git/objects/56/163b00fb7641da4b7e741a8e1318a103ea867c": "4b9f37d2cdca9f0fbcde6f584297536e",
".git/objects/57/48edc98dbbeddd676683db30e2574f0e043c75": "23be97e8e02fe77a7e95689c0f5610d1",
".git/objects/58/847c365743608457c518e8847b0101aaed661a": "19da4b9d865c57ecccf8588a9765797d",
".git/objects/59/0e87142fc636eb4204b618cbc48325d8eeff43": "f9862241f4d48dc240a307c08b1ce556",
".git/objects/59/2121035ced802dce927ca0d9f9c7fc0484c110": "da92495009f1f5e7305dc5e1f5a5a583",
".git/objects/5a/d621264416d1c2e68672a61fb769161878d142": "e634412465248b759572004e559f6b6e",
".git/objects/5b/4269ae683e49ed23e6ad37aa8ceb0ad342c096": "9f38c49c96ee6c96372b4edd377bb279",
".git/objects/5e/3e8b1c84249499900514de43c3aae6e237cf92": "9e2d46ccef3545226cdb7abf7c4957b6",
".git/objects/5e/6d3f2d5aeea8e2e331607fe205db7ac76178d5": "c04d180a445d1ddfcfc16a32b3a00eba",
".git/objects/5f/b48d807f1b4abf73d23b367f3a3d64c7b6fbae": "bed287b4326032fca569ad74bafc9653",
".git/objects/60/29c35292beb95a150ce9d1663764362af5e1c2": "447a39568fbf4a918cb32b25fa90f639",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/67/88d946ffcc8c1d14480380522ad51e5651af7e": "13c8b6dea2839a8f8709d523573600a5",
".git/objects/68/6a95535909fe1beb0cdc49d2200f9e5b5e64f0": "8ab1a0ddcd95596d2bce2a414f134271",
".git/objects/6a/03ed5c635da75e559530d5314ed8be879e118f": "a02818a2b3a95b5c69d89afdb07356b7",
".git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
".git/objects/75/2d8f5c0e3f6fb3ec63ab130d3f96f1ac3574c7": "5742333b31e7bbe5f37c643ea6f526bc",
".git/objects/75/90f64aacbb7f7c89a5c8b020f797ead7a575f0": "3f69e2745862583125857af3a317f935",
".git/objects/7c/9dfb535eb5f8d91959da487390457cbcb76fba": "48cb7d3d074d810a3154ba448c1ada51",
".git/objects/7e/6ac575ed581cc07f4d98168664515a53d095c6": "65fa9ee228383162b1e28bb3deebb0ce",
".git/objects/82/a9fba976d43009072bef60d0094c4f878d26db": "1da3083a0567496acfa5c6730c99c284",
".git/objects/85/e15a44ee4f5429bf7a742daab2b3466df2c4c8": "775ad87ca128e7cdc7b0aaedd22e6028",
".git/objects/87/a3047bd2db2b5d24fc0cbcc9763bba0e272649": "d55eb7ce27990eb7861d7d7d508cc4d0",
".git/objects/88/714ec6672639918ce1c54f75ee71ae0e19935a": "2b9ac6733e31a5bcc77637566c709b92",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/2391b7238d0d697fc8fdc605478cb265ceb1e8": "a1817c54feb79c5255c28a7f678a6c9c",
".git/objects/8a/950fbcd64e696ac87a96e930864181c728c0c1": "eeb39b8a6e4812fb9ed0488bbad9dc3e",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/94/d42465d77c78c5643e2fc653410e544afda81d": "7d56d337f252a9a218723a93dfb1b192",
".git/objects/94/de540a6fdfa417c0de38d1f7440d6fd663df96": "e3549bfc15ebedf7a2f15368f1c73e0d",
".git/objects/96/5526bf3d36a4b0bc1f0dbcdc39a10962727fd7": "2ae56528304e9871fb25380236b136a9",
".git/objects/98/5493bcfc5794975a47b3e0b54304fa6bc31ab3": "85eff59c279e541ef186564c508df672",
".git/objects/98/8c98ec835a165bc15c79129fc2de9f0ea86de6": "ddba3de3ab61b3812b9eee816e19a9ce",
".git/objects/a0/6fe6d77d3c6bc9076bec446a10ae7298d2439a": "7b2dc090e274386042b70d094a3a7e1b",
".git/objects/a1/5cc254453d9da366fa0bdf2900ec65bcff52f2": "cb9efb0883e1d1ed7296c1cf80ddea64",
".git/objects/a4/a76cb6ffbd33fe8b0bb082b2d351b6671c9829": "042b2896af5885f9b5a22141d82c31db",
".git/objects/a5/9cf2a47be582e58836d414cb814dfa9f761b12": "15e9abdd7b2336284da9c265cae9a7a8",
".git/objects/a6/f55964172260a214a888826ab31db7a6b4a7d0": "aef25156a6e39c37b199766c35baa80a",
".git/objects/a7/da4fdf864bb3d65138c88963672b2c44bb63cc": "ea548592e36c2384190a19c0488340f1",
".git/objects/a8/5787d2652281c9ffa8caa112308c58134071cf": "f76fa6a3e084864e30497b22b449dd36",
".git/objects/a9/0bb1537265d8507c0115fee9020aa7f74cac22": "44627829673a551c218b0ef445c9057a",
".git/objects/ab/1e0ee776b4e794b1eb5d46e9abeb58a5298bda": "75a382f379c4053102f1b0d2e0a346d9",
".git/objects/ac/6bce9a07e3ac23f6eeb0fa2372c3234615af37": "cbe73d421830928926b3904352782f3f",
".git/objects/ac/dff003233d90b91aebe67dcd38d5049aacda7b": "6fea100e06e06948e49143e92be1a8dd",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/ae/e73b725f949590df5450e24bbd357759d95bb0": "b8296040d2999058b76f4d440cb1b5a9",
".git/objects/af/07c5889000aa8d2cc13828ed9cf22ebe60e98c": "c8a593fb7d03ad66ef1d0501c2dbe225",
".git/objects/b2/1fecdd3c6fe5e61dc6d4876933a9315bd24224": "6ca6a5fd9472d22e87a0657c062edf24",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/b23ccf53425a5fa8bb05d5e2031c4be635b1e5": "f59871c7bdd1c34e4d081cd0bbfda9b4",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/bc/c4dcec08c6a31b3065efc5cd199d4261955c00": "e3960d13d0246863b86bc02b95d56d6a",
".git/objects/c1/8cbc32ae9de1b46eb3969048784a2b157e9e05": "9776c9fbb5fc38b1b8e430841a53bd32",
".git/objects/c7/7b9089d2a9880f5f11ce00816914485da74d5c": "ff37394a8490d56465a3149a1a6b8e63",
".git/objects/c7/95e11de1db375cf758b6335fc106ac09c80430": "cc5150de3e7c593946804e49bf827aaa",
".git/objects/c8/415b75d0e5f6d3c3b2332e66f6a1b0aaae5a7e": "7e956bc367aae8a1d651b9c023ff64cb",
".git/objects/cb/cadaf7a58988e5e3e106ceb71814fe78c8bcb1": "dfb16d2627c800ffe7dee1d7b2afe4cb",
".git/objects/cc/d4dec7f25c6f5a3878df06299d3c687bea41c9": "af36e754e98327fa15d9e3ab649137cb",
".git/objects/ce/208134115e5405e164a835ed28a97aab5b97ca": "ee4f3c31b1e41c60467370555d6b8aa7",
".git/objects/ce/73c121f75f6f4776c835d07895b2a76ca5570b": "ad684ac8f15c926cf29b3c096349b2b0",
".git/objects/cf/6a19c2e3a35431ab9c88683b35fa0ab32b10f5": "bcbf8b9f2673369c0859bd4c36fc1c20",
".git/objects/d2/49c7d944d32727593f19fb7ae2c32d073ddfbf": "f191417416491e76fa0d79018c0a55b9",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d5/5fc26c45f50073e1b59d7ce96133e460cdc918": "90c9ae35afd7fba0d1ce9a0a912b182e",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/94efa08101f9a5b41d945686c59be2eee8074b": "2d7b4b96c19f9093e57becfc8d45cda6",
".git/objects/d9/fb25764d1136879beba22d78fb72fc220fea2b": "ecdae9d1a335080d39ddd16900d19472",
".git/objects/dd/f447db88f3e6f836548287da489919b4078b82": "37c259d734b3b4496bac1a5010da7fe9",
".git/objects/e4/1ea8d2e4c87abbde001dee4e92d67fa7984163": "1e011620a21d2ec7b709439ab9309008",
".git/objects/e5/1d3d4133b711972f913be182567857fc7639f6": "ffcc2d1fba8ec5ca282c0d319e85e608",
".git/objects/e7/14c9bb8a3bfa59a7bf70e8414b064f762b021b": "b61a6a3e1fbff0f6394338615ab6d013",
".git/objects/e7/4a9dc76aaeff3cccba7ac7df19424605b63ebe": "d553dd86b27525650648f1d776f85a76",
".git/objects/e8/6ba056d04cdddf0dfe1c5b8acb0f03ebf514a6": "791f27bb7c29fb4f0c35d6f088ae0bb2",
".git/objects/e9/24cfdf5294ba379bebc39ae03b876e97b4989b": "d9427ae3b076cee6331f886099556948",
".git/objects/e9/465d31c4bddf2836fe72a0baff9344a93753d8": "0ab6401d97dd56d70b0f60de00fc6fe1",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/765bbd7bdcef48bd14f48d3c5b4afa1373b61b": "42b468586397851881e684f3825d96a9",
".git/objects/ef/d5264bf56617cdae76cf6e128976835f2aae9a": "26a01281eeb7a3bd0afc74e4dd0c3348",
".git/objects/f1/36dc20ec0315265dd095f28163a842183b95b6": "7373b0c1e92c01cacfc41b3d0ff3ed7b",
".git/objects/f1/c63453f83d79dfad6f830d862d7ba9711c1bc4": "a3cd3eb275f7c1cc5d645007f23c519f",
".git/objects/f4/d5874a2835043797c37ff8bcab2b1f67327b64": "95d153ad5374257967496d5359052f4b",
".git/objects/f8/6ee6c69d73938fc3145dfdbca245ed8618d96c": "f10dba7605390a2e5dbba681b99cbad3",
".git/objects/f9/b0f0ebb801aa96a803d98b6386bef70324cccb": "ac74f41bf216d7aefa786be23a510f31",
".git/objects/fa/a7c901e00a01bcd652cef04620dfb0c7541fd7": "c7262d8628f36ed4bfff65bd41b263fa",
".git/objects/fa/a91395e4f7e17b104bef480e32ccff220b8fed": "530f204389e43c6d8a2e0fbbddcd044d",
".git/objects/fc/152691909236a1b0eabd67fae7d011f04c46a4": "0f98b093484ef88dbc50eaeeac802c6f",
".git/objects/fd/231251b8f21695b2ac45dbdab9b726f5a1469e": "00e117f51a9afff6a87cb935acb66032",
".git/objects/fd/ce2086524e48d19b51a506fce6680ca8ceb624": "7fb04dff47210573897ad34643f35c1c",
".git/objects/ff/7b2aa52bc652b9ba331e6039d6e72305f50318": "4d3cb5d0618cddd283bb0f9da355b285",
".git/ORIG_HEAD": "4c212a9e3e5232a08fac2d7e563735cd",
".git/refs/heads/master": "83e35cac20bc6e63a9d9e642fcc6d3f9",
".git/refs/remotes/origin/master": "6244d422e403ebf676eb4eb8b53e7208",
".git/refs/remotes/web/master": "83e35cac20bc6e63a9d9e642fcc6d3f9",
"assets/AssetManifest.json": "7dfaae034735c57a10e5e44713cc1d94",
"assets/AssetManifest.smcbin": "ab4201e2681bce966df0bc2701e7bf9a",
"assets/assets/icons/apple_login.png": "791c511658421055737a205e0ef4eb8b",
"assets/assets/icons/app_logo.png": "b2e2517187bf4f293703f033c6e292ce",
"assets/assets/icons/available_income.png": "c0803734a2e93588c346b6135f95c1da",
"assets/assets/icons/bank.png": "e9e100e60a2ba9e9a5d33c730f87420d",
"assets/assets/icons/bill_record.png": "e5b1e7f8b3fb875468276073d4016c32",
"assets/assets/icons/card_id.png": "cf159c0addebc59be02cb8f21f112b55",
"assets/assets/icons/change_password.png": "ae3949b9da94fba931cf0886fc8ce606",
"assets/assets/icons/checklist.png": "66ff9969f9ea36358ece8c51a6684513",
"assets/assets/icons/customer_service.png": "9c25dfb5293119b04e361463896e351f",
"assets/assets/icons/facebook_login.png": "c514091ebce6ddcc5c629eac2de760f4",
"assets/assets/icons/google_login.png": "f5615acb90fe0e71ea31156733506a50",
"assets/assets/icons/grow_income.png": "28832861a67d92cb935ae2d296d129b1",
"assets/assets/icons/ic_invite.png": "2b127e8d4002d16d81d4df3ff49770f8",
"assets/assets/icons/invite_friend.png": "c6aa83750565ec0164598b4d8d5283bb",
"assets/assets/icons/library.svg": "fe55a4841f02bb35de492d869a3d448c",
"assets/assets/icons/location_pin.png": "ab8244023ac2fc303cbe48e3b0873e02",
"assets/assets/icons/microphone.svg": "ad2bea7f96862b90a7f88b2fa989f3b4",
"assets/assets/icons/nav_home.svg": "706ec6de17637aa0f74a0d13ef2647d9",
"assets/assets/icons/payment_password.png": "972ec9f78ea57a86926c4bfe0f2fa419",
"assets/assets/icons/pen.svg": "3e3345f1df380798259b537abddd4bd0",
"assets/assets/icons/person.png": "b907dc756c5ac066437b40a2dd900187",
"assets/assets/icons/profile.svg": "0fbb6ef815068a956fc0d5f8d281e4c9",
"assets/assets/icons/profilepic.png": "014ec63c96927a091b955cfcec80b5b3",
"assets/assets/icons/pulse.png": "57a1bc79ce84cb0f3312f6f02a42dbf9",
"assets/assets/icons/recharge_money.png": "aa097cfd2df29cb3c0e0706e3dd6d40a",
"assets/assets/icons/sad_smiley.png": "db9dc12af7684e1b780055be523512f0",
"assets/assets/icons/save.svg": "ded94d4238534b7478f614dde614673b",
"assets/assets/icons/total_asset.png": "304eb5eae2a87fc27aa5abbebf648668",
"assets/assets/icons/transfer_money.png": "33efcd20bce6f1b492d760d3786aa3d1",
"assets/assets/icons/withdraw_money.png": "08e517877364e73d84c847aba67f7711",
"assets/assets/icons/yesterday_income.png": "8c47129beb81e6a04ef11aeb0aee921e",
"assets/assets/images/anne.jpeg": "7a636f9bf09ef6845f336b9de282007d",
"assets/assets/images/ic_demo.png": "39ebb1778485de590663dae4e27c8054",
"assets/assets/images/login_background.png": "cb19a64e19e4f8dfacee96809ec35c94",
"assets/assets/images/refer.zip": "0797702f288cf3ac28f00e0cea9163f4",
"assets/assets/images/refer_app.json": "f286885a146a91139cbff9cfd46fe51c",
"assets/assets/images/security.json": "c8590e3b91239783108563f108a440dc",
"assets/assets/images/setup_security.zip": "1f316ea706056d4fa732212135653fc9",
"assets/assets/images/welcome_bg.jpg": "7e79d88646841cd37303c682b2dda486",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "9f59ef419e11588c23b076798131ee91",
"assets/NOTICES": "4915b666db68399f143601d1799ff05b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "23682bfd1d3680013c46d82e4d2a6ed0",
"/": "23682bfd1d3680013c46d82e4d2a6ed0",
"main.dart.js": "18b195c8ffd89e917dfcc26229d65c0e",
"manifest.json": "d2d831f0958d91e672dcd702531bbc74",
"version.json": "b50eb70d7a83a6c922e33acfa6a3ebd9",
"webpage/.git/config": "8f4231bc3e2d5e2d97baef5fbbc92e60",
"webpage/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"webpage/.git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
"webpage/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"webpage/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"webpage/.git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
"webpage/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"webpage/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"webpage/.git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
"webpage/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"webpage/.git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
"webpage/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"webpage/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"webpage/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"webpage/.git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
"webpage/.git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
"webpage/.git/index": "2903bc22628d85edf1f4d36d42a54031",
"webpage/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"webpage/.git/logs/HEAD": "10dcc83bd6dbcaf74869905158e5859f",
"webpage/.git/logs/refs/heads/master": "10dcc83bd6dbcaf74869905158e5859f",
"webpage/.git/logs/refs/remotes/origin/HEAD": "10dcc83bd6dbcaf74869905158e5859f",
"webpage/.git/objects/pack/pack-5fc09aa5fc9367d61a7798b4f03647ddf19a046c.idx": "b3b9b78187b7c3db76f0b0c904edec88",
"webpage/.git/objects/pack/pack-5fc09aa5fc9367d61a7798b4f03647ddf19a046c.pack": "655238123245f5009b1d2615b21727ae",
"webpage/.git/packed-refs": "c7cf0735ba61954e0a2348dec29ac760",
"webpage/.git/refs/heads/master": "2f3c21bb30f5fc2a1e7285dc568d9787",
"webpage/.git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
"webpage/README.md": "a1c1e16c738a411981d69a3266e17f5d"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
