'use strict';

var sexcore = module.exports;

// module information
sexcore.version = 'v' + require('./package.json').version;
sexcore.versionGuard = function(version) {
  if (version !== undefined) {
    var message = 'More than one instance of sexcore-lib found. ' +
      'Please make sure to require sexcore-lib and check that submodules do' +
      ' not also include their own sexcore-lib dependency.';
    throw new Error(message);
  }
};
sexcore.versionGuard(global._sexcore);
global._sexcore = sexcore.version;

// crypto
sexcore.crypto = {};
sexcore.crypto.BN = require('./lib/crypto/bn');
sexcore.crypto.ECDSA = require('./lib/crypto/ecdsa');
sexcore.crypto.Hash = require('./lib/crypto/hash');
sexcore.crypto.Random = require('./lib/crypto/random');
sexcore.crypto.Point = require('./lib/crypto/point');
sexcore.crypto.Signature = require('./lib/crypto/signature');

// encoding
sexcore.encoding = {};
sexcore.encoding.Base58 = require('./lib/encoding/base58');
sexcore.encoding.Base58Check = require('./lib/encoding/base58check');
sexcore.encoding.BufferReader = require('./lib/encoding/bufferreader');
sexcore.encoding.BufferWriter = require('./lib/encoding/bufferwriter');
sexcore.encoding.Varint = require('./lib/encoding/varint');

// utilities
sexcore.util = {};
sexcore.util.buffer = require('./lib/util/buffer');
sexcore.util.js = require('./lib/util/js');
sexcore.util.preconditions = require('./lib/util/preconditions');

// errors thrown by the library
sexcore.errors = require('./lib/errors');

// main bitcoin library
sexcore.Address = require('./lib/address');
sexcore.Block = require('./lib/block');
sexcore.MerkleBlock = require('./lib/block/merkleblock');
sexcore.BlockHeader = require('./lib/block/blockheader');
sexcore.HDPrivateKey = require('./lib/hdprivatekey.js');
sexcore.HDPublicKey = require('./lib/hdpublickey.js');
sexcore.Networks = require('./lib/networks');
sexcore.Opcode = require('./lib/opcode');
sexcore.PrivateKey = require('./lib/privatekey');
sexcore.PublicKey = require('./lib/publickey');
sexcore.Script = require('./lib/script');
sexcore.Transaction = require('./lib/transaction');
sexcore.URI = require('./lib/uri');
sexcore.Unit = require('./lib/unit');

// dependencies, subject to change
sexcore.deps = {};
sexcore.deps.bnjs = require('bn.js');
sexcore.deps.bs58 = require('bs58');
sexcore.deps.Buffer = Buffer;
sexcore.deps.elliptic = require('elliptic');
sexcore.deps.scryptsy = require('scryptsy');
sexcore.deps._ = require('lodash');

// Internal usage, exposed for testing/advanced tweaking
sexcore.Transaction.sighash = require('./lib/transaction/sighash');
