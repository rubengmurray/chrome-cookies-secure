const assert = require('assert');
const should = require('should');
const cookies = require('../index');

let url;
let format;
let profile;

describe('getCookiesPromise', () => {

    it('should be rejected if there is no url', () => {
        profile = 'Profile 31'
        return cookies.getCookiesPromise(url, format, profile).should.be.rejected
    })

    it('should be rejected if profile does not exist', () => {
        url = 'https://www.google.com'
        profile = 'profileNameDoesntExist'
        return cookies.getCookiesPromise(url, format, profile).should.be.rejected
    })

    it('should be fulfilled if a good url and profile are provided', () => {
        url = 'https://www.google.com'
        profile = 'Profile 31'
        return cookies.getCookiesPromise(url, format, profile).should.be.fulfilled
    })

    it('should return an array (of objects) when puppeteer format is specified', () => {
        format = 'puppeteer';
        url = 'https://www.google.com'
        profile = 'Profile 31'
        return cookies.getCookiesPromise(url, format, profile).should.eventually.be.an.Array()
    })

    // it('should contain some cookies', () => {
    //     format = 'puppeteer';
    //     url = 'https://www.google.com'
    //     profile = 'Profile 31'

    //     function PuppeteerCookie(name, value, expires, domain, path) {
    //         this.name = name,
    //         this.value = value,
    //         this.expires = expires,
    //         this.domain = domain,
    //         this.path = path
    //     }

    //     return cookies.getCookiesPromise(url, format, profile).should.eventually.be.an.instanceof(function PuppeteerCookie(name, value, expires, domain, path) {
    //         this.name = name,
    //         this.value = value,
    //         this.expires = expires,
    //         this.domain = domain,
    //         this.path = path
    //     })
    // })
})