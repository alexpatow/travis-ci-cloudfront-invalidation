# Travis CI CloudFront Invalidation Tool

Node tool for invalidation of CloudFront distributions after an update to an S3 bucket is performed.

## Installation

Use this tool in combination with your `.travis.yml` file:

    language: node_js
    node_js:
    - '6'
    install:
    - npm install -g travis-ci-cloudfront-invalidation
    - npm install
    ...
    after_deploy:
    - travis-ci-cloudfront-invalidation -a $AWS_ACCESS_KEY -s $AWS_SECRET_KEY -c $AWS_CLOUDFRONT_DIST_ID -i '/*' -b $TRAVIS_BRANCH -p $TRAVIS_PULL_REQUEST


## Usage

travis-ci-cloudfront-invalidation requires six flags:

    a: 'AWSAccessKey'
    s: 'AWSSecretKey'
    c: 'CloudFrontDistributionId'
    i: 'ItemsforInvalidation'
    b: 'TravisBranch'
    p: 'TravisPullRequest'

These flags are optional:

    o: 'OnBranches' defaults to 'master'

## Example

    travis-ci-cloudfront-invalidation -a QDUAIUQ3OQ7I2WDNLUCO, -s f4GTRs34nRS3Ntf678lDsT87Qszvrs23lmREd57 -c Y54SDKE34MDTU1 -i '/*' -b $TRAVIS_BRANCH -p $TRAVIS_PULL_REQUEST -o 'master,stage'