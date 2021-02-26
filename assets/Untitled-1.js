! function(t) {
    var e = {
        init: function() {
            this.initMegaMenuPosition(), this.initFakeCrop(), this.initAutocompleteSearch(), this.initBackToTop(), this.initToastrOptions(), this.initProductPriceText(), this.initToolTip(), this.initNavigationMobile(), this.initSubNavigationMobile(), this.initSearchAside(), this.initToggleBlock(), this.initOpenSubCategories(), this.initCompare(), this.initWhishlist(), this.initAjaxCart(), this.initAjaxFilter(), this.initImageShopify(), this.initProductImageSize(), this.initCountdownShopify(), this.initResponsiveVideos()
        },
        initFakeCrop: function() {
            var e, i = new FakeCrop;
            i.init(), t(window).resize(function() {
                clearTimeout(e), e = setTimeout(function() {
                    i.init()
                }, 100)
            })
        },
        initAutocompleteSearch: function() {
            var e = new Bloodhound({
                datumTokenizer: Bloodhound.tokenizers.obj.whitespace("title"),
                queryTokenizer: Bloodhound.tokenizers.whitespace,
                remote: {
                    url: "/search?type=product&q=%QUERY&view=json",
                    wildcard: "%QUERY"
                }
            });
            e.initialize(), t(".search-bar-box").typeahead({
                hint: !0,
                highlight: !0,
                minLength: 1
            }, {
                name: "best-pictures",
                display: "title",
                source: e,
                templates: {
                    suggestion: function(t) {
                        return t ? '<a href="' + t.url + '"><span class="thumbnail"><img src="' + t.thumbnail + '"></span><span class="title">' + t.title + "</span></a>" : "<p></p>"
                    }
                }
            })
        },
        initBackToTop: function() {
            t("#back-top").hide(), t(function() {
                t(window).scroll(function() {
                    t(this).scrollTop() > 100 ? t("#back-top").fadeIn() : t("#back-top").fadeOut()
                }), t("#back-top a").click(function() {
                    return t("body,html").animate({
                        scrollTop: 0
                    }, 800), !1
                })
            })
        },
        initToastrOptions: function() {
            toastr.options = {
                closeButton: !0,
                debug: !1,
                newestOnTop: !1,
                progressBar: !1,
                positionClass: "toast-top-center",
                preventDuplicates: !1,
                onclick: null,
                showDuration: "200",
                hideDuration: "500",
                timeOut: "3000",
                extendedTimeOut: "500",
                showEasing: "swing",
                hideEasing: "linear",
                showMethod: "fadeIn",
                hideMethod: "fadeOut"
            }
        },
        initProductPriceText: function() {
            t(".tp-product-item-price").each(function() {
                t(this).html(t(this).html().replace("from", "")), t(this).html(t(this).html().replace("From", ""))
            }), t(".tp-product-item-price").has("strong").addClass("tp-has-sale-price")
        },
        initToolTip: function() {
            t('[data-toggle="tooltip"]').tooltip()
        },
        initStickyHeader: function() {
            var e = t(window).scrollTop(),
                i = t("header.site-header.header-sticky-enable");
            if (i.length > 0)
                if (t(window).width() >= 1300 || t(window).width() < 992) {
                    var o = i.outerHeight() + t(".site-header-wrap .breadcrumb").outerHeight();
                    t(".site-header-wrap").css("min-height", o), e > o + 300 ? i.addClass("sticky fadeInDown") : i.removeClass("sticky fadeInDown")
                } else t(".site-header-wrap").css("min-height", 0)
        },
        initMegaMenuPosition: function() {
            var e = t(window).width();
            if (e >= 992) {
                var i = t(".site-nav-horizontal .mega-menu .site-nav-dropdown");
                i.css("width", e), i.parent().hover(function() {
                    var e = t(this).find(".site-nav-dropdown"),
                        i = t("#PageContainer");
                    e.position({
                        my: "left",
                        at: "left",
                        of: window
                    });
                    var o = i.offset().left + i.outerWidth() - (e.offset().left + e.outerWidth()),
                        r = e.offset().left + o - i.offset().left;
                    console.log(o), console.log(r), r < 0 && (o -= r), o < 0 && e.css("left", o + "px")
                }, function() {
                    t(this).children(".site-nav-dropdown").css("left", "")
                })
            }
        },
        initSearchAside: function() {
            t(".search-aside-wrap .icon-search").click(function() {
                t(this).next(".search-aside").addClass("active")
            }), t(".search-aside-wrap .icon-close").click(function() {
                t(this).parent(".search-aside").removeClass("active")
            })
        },
        initNavigationMobile: function() {
            if (t(window).width() < 992) {
                var e = t(".site-header .site-nav-wrapper"),
                    i = t(".tp-menu-mobile .btn-close");
                t(".mobile-navi-toggle").click(function() {
                    e.addClass("slide-active"), setTimeout(function() {
                        t('<div class="site-nav-backdrop"></div>').insertBefore(".site-nav-wrapper"), t(".site-nav-backdrop").click(function() {
                            e.hasClass("slide-active") && e.removeClass("slide-active"), t(".site-nav-backdrop").remove()
                        })
                    }, 300)
                }), i.click(function() {
                    e.hasClass("slide-active") && e.removeClass("slide-active"), t(".site-nav-backdrop").remove()
                }), t(".site-nav-backdrop").click(function() {
                    alert("pop"), e.hasClass("slide-active") && e.removeClass("slide-active"), t(".site-nav-backdrop").remove()
                })
            }
        },
        initSubNavigationMobile: function() {
            t(".nav-item-link>.icon-plus").click(function() {
                t(this).parent(".nav-item-link").toggleClass("open"), t(this).parents(".nav-item").siblings().find(".nav-item-link").removeClass("open"), t(this).parents(".nav-item").siblings().find(".tp-mega-heading").removeClass("open"), t(this).parents(".nav-item").siblings().find(".site-nav-dropdown").slideUp(), t(this).parent(".nav-item-link").next(".site-nav-dropdown").slideToggle()
            }), t(".tp-mega-heading>.icon-plus").click(function() {
                var e = t(this).parent(".tp-mega-heading"),
                    i = e.next(".site-nav-dropdown"),
                    o = t(this).parents(".site-nav-dropdown");
                o.find(".tp-mega-heading").not(e).removeClass("open"), o.find(".site-nav-dropdown").slideUp(), e.hasClass("open") ? e.removeClass("open") : e.addClass("open"), i.is(":visible") ? i.slideUp() : i.slideDown()
            })
        },
        initToggleBlock: function() {
            t(".tp-sidebar-block .tp-sidebar-heading .fa-angle-down").click(function() {
                t(this).parents(".tp-sidebar-heading").toggleClass("open").next(".tp-sidebar-content").slideToggle()
            }), t(window).width() < 992 && (t(".site-footer .footer-heading").click(function() {
                t(this).toggleClass("open").next(".footer-toggle-wrap").slideToggle()
            }), t(".button-sidebar-toggle").click(function() {
                t(this).parents("main").find(".tp-sidebar-toggle").toggleClass("slide-left"), setTimeout(function() {
                    t('<span class="tp-button-close"></span>').insertBefore(".tp-sidebar-toggle"), t(".tp-button-close").click(function() {
                        t(this).next(".tp-sidebar-toggle").removeClass("slide-left"), t(this).remove()
                    })
                }, 500)
            }))
        },
        initOpenSubCategories: function() {
            t(".category-navi .cat-item-parent > .fa").click(function() {
                t(this).parent("li").addClass("open");
                var e = t(this).next("ul");
                e.is(":visible") ? (t(this).parent("li").removeClass("open"), e.slideUp()) : (t(".category-navi ul:visible").slideUp(), e.slideDown())
            })
        },
        openNewsletterPopup: function() {
            t("#newsletter-modal").fadeIn(500, function() {
                t("#newsletter-modal .modal-window").fadeIn(500)
            })
        },
        closeNewsletterPopup: function() {
            t("#newsletter-modal .modal-window").fadeOut(500, function() {
                t("#newsletter-modal .modal-overlay").fadeOut(500, function() {
                    t("#newsletter-modal").hide(), t.cookie("emailSubcribeModal", "closed", {
                        expires: 1,
                        path: "/"
                    })
                })
            })
        },
        initNewsletterPopup: function() {
            "closed" != t.cookie("emailSubcribeModal") && e.openNewsletterPopup(), t("#newsletter-modal .btn.close").click(function(t) {
                t.preventDefault(), e.closeNewsletterPopup()
            }), t("#newsletter-modal .modal-overlay").click(function() {
                e.closeNewsletterPopup()
            }), t("#mc_embed_signup form").submit(function() {
                "" != t("#mc_embed_signup .email").val() && e.closeNewsletterPopup()
            }), t(".newsletter-msg").bind("click", function() {
                t("#newsletter-modal").remove(), t.cookie("popupNewsletterClose", "closed", {
                    expires: 1,
                    path: "/"
                })
            }), "closed" == t.cookie("popupNewsletterClose") && t("#newsletter-modal").remove()
        },
        customSCAQuickView: function() {
            t(".sca-qv-button").each(function() {
                t(this).parent().removeAttr("style").addClass("tp-sca-qv-button-wrap")
            })
        },
        initCompare: function() {
            var t = new Compare;
            t.initCompareSaveProductId(), t.initCompareChecked()
        },
        initWhishlist: function() {
            var t = new Wishlist;
            t.initWishlistSaveProductId(), t.initWishlistChecked()
        },
        initAjaxCart: function() {
            var t = new Cart;
            t.initAddToCart(), t.initRemoveToCart()
        },
        initAjaxFilter: function() {
            (new Filter).initAll()
        },
        initImageShopify: function() {
            (new ImageShopify).initAll()
        },
        initProductImageSize: function() {
            setTimeout(function() {
                (new ImageShopify).initSetProductHeight()
            }, 1e3)
        },
        initCountdownShopify: function() {
            (new CountDownShopify).initAll()
        },
        initSwatch: function() {
            t(".swatch :radio").change(function() {
                var e = t(this).closest(".swatch").attr("data-option-index"),
                    i = t(this).val();
                t(this).closest("form").find(".single-option-selector").eq(e).val(i).trigger("change")
            })
        },
        initResponsiveVideos: function() {
            var e = t('iframe[src*="youtube.com/embed"], iframe[src*="player.vimeo"]'),
                i = e.add("iframe#admin_bar_iframe");
            e.each(function() {
                t(this).wrap('<div class="video-wrapper"></div>')
            }), i.each(function() {
                this.src = this.src
            })
        }
    };
    t(document).ready(function() {
        e.init()
    }), t(window).load(function() {
        e.initNewsletterPopup(), e.initProductImageSize(), e.customSCAQuickView(), e.initSwatch()
    }), t(window).on("load scroll resize", function() {
        e.initStickyHeader()
    }), t(window).on("load resize", function() {
        e.initMegaMenuPosition(), e.initNavigationMobile()
    }), t(window).on("load", function() {
        t(".view").on("click", function(e) {
            e.preventDefault(), t(".open").addClass("active")
        }), t(".close").on("click", function(e) {
            e.preventDefault(), t(".open").removeClass("active")
        }), t(".step-open,.back").on("click", function(e) {
            e.preventDefault(), t(".step").hide(), t(t(this).attr("data-open")).show(), "#first-step" === t(this).attr("data-open") && t("#head").show(), "#first-step" === t(this).attr("data-open") && (t(".progress-meter").css("width", "0%"), t(".percent-label").text("0% complete"), t(".vape_finder_custom h3").text("LOOKING FOR YOUR PERFECT VAPE KIT?")), "#second-step" === t(this).attr("data-open") && (t(".progress-meter").css("width", "25%"), t(".percent-label").text("25% complete"), t(".vape_finder_custom h3").text("LOOKING FOR YOUR PERFECT VAPE KIT?")), "#third-step" === t(this).attr("data-open") && (t(".progress-meter").css("width", "50%"), t(".percent-label").text("50% complete"), t(".vape_finder_custom h3").text("LOOKING FOR YOUR PERFECT VAPE KIT?")), "#fourth-step" === t(this).attr("data-open") && (t(".progress-meter").css("width", "75%"), t(".percent-label").text("75% complete"), t(".vape_finder_custom h3").text("LOOKING FOR YOUR PERFECT VAPE KIT?")), "#fourth-step" === t(this).attr("data-open") && (t(".progress-meter").css("width", "75%"), t(".percent-label").text("75% complete"), t(".vape_finder_custom h3").text("LOOKING FOR YOUR PERFECT VAPE KIT?")), "#final-step" === t(this).attr("data-open") && (t(".progress-meter").css("width", "100%"), t(".percent-label").text("Based on the answers you gave we recommend the following products. Still unsure? Get in touch using our live chat. "), t(".vape_finder_custom h3").text("Products")), "#step" === t(this).attr("data-open") && t("#head").hide()
        }), t(".final_step_btn .step-open.btn").on("click", function(e) {
            e.preventDefault(), t(".vape_finder_custom h3").text("LOOKING FOR YOUR PERFECT VAPE KIT?")
        }), t(".finder_product").hide(), t(".price_btn").on("click", function(e) {
            e.preventDefault(), t(".finder_product").filter(".price_product").show(), t(".finder_product").filter(".quality_product").hide(), t(".battery_btn").on("click", function(e) {
                e.preventDefault(), t(".finder_product").filter(".price_product.battery_product").show(), t(".finder_product").filter(".price_product.cloud_product").hide(), t(".25_50_btn").on("click", function(e) {
                    e.preventDefault(), t(".finder_product").filter(".price_product.cloud_product").hide(), t(".finder_product").filter(".price_product.battery_product.25_50_product").show(), t(".finder_product").filter(".price_product.battery_product.50_75_product").hide(), t(".finder_product").filter(".price_product.battery_product.75p_product").hide()
                }), t(".50_75_btn").on("click", function(e) {
                    e.preventDefault(), t(".finder_product").filter(".price_product.cloud_product").hide(), t(".finder_product").filter(".price_product.battery_product.50_75_product").show(), t(".finder_product").filter(".price_product.battery_product.25_50_product").hide(), t(".finder_product").filter(".price_product.battery_product.75p_product").hide()
                }), t(".75p_btn").on("click", function(e) {
                    e.preventDefault(), t(".finder_product").filter(".price_product.cloud_product").hide(), t(".finder_product").filter(".price_product.battery_product.75p_product").show(), t(".finder_product").filter(".price_product.battery_product.25_50_product").hide(), t(".finder_product").filter(".price_product.battery_product.50_75_product").hide()
                })
            }), t(".cloud_btn").on("click", function(e) {
                e.preventDefault(), t(".finder_product").filter(".price_product.cloud_product").show(), t(".finder_product").filter(".price_product.battery_product").hide(), t(".25_50_btn").on("click", function(e) {
                    e.preventDefault(), t(".finder_product").filter(".price_product.battery_product").hide(), t(".finder_product").filter(".price_product.cloud_product.25_50_product").show(), t(".finder_product").filter(".price_product.cloud_product.50_75_product").hide(), t(".finder_product").filter(".price_product.cloud_product.75p_product").hide()
                }), t(".50_75_btn").on("click", function(e) {
                    e.preventDefault(), t(".finder_product").filter(".price_product.battery_product").hide(), t(".finder_product").filter(".price_product.cloud_product.50_75_product").show(), t(".finder_product").filter(".price_product.cloud_product.25_50_product").hide(), t(".finder_product").filter(".price_product.cloud_product.75p_product").hide()
                }), t(".75p_btn").on("click", function(e) {
                    e.preventDefault(), t(".finder_product").filter(".price_product.battery_product").hide(), t(".finder_product").filter(".price_product.cloud_product.75p_product").show(), t(".finder_product").filter(".price_product.cloud_product.25_50_product").hide(), t(".finder_product").filter(".price_product.cloud_product.50_75_product").hide()
                })
            })
        }), t(".quality_btn").on("click", function(e) {
            e.preventDefault(), t(".finder_product").filter(".quality_product").show(), t(".finder_product").filter(".price_product").hide(), t(".battery_btn").on("click", function(e) {
                e.preventDefault(), t(".finder_product").filter(".quality_product.battery_product").show(), t(".finder_product").filter(".quality_product.cloud_product").hide(), t(".25_50_btn").on("click", function(e) {
                    e.preventDefault(), t(".finder_product").filter(".quality_product.cloud_product").hide(), t(".finder_product").filter(".quality_product.battery_product.25_50_product").show(), t(".finder_product").filter(".quality_product.battery_product.50_75_product").hide(), t(".finder_product").filter(".quality_product.battery_product.75p_product").hide()
                }), t(".50_75_btn").on("click", function(e) {
                    e.preventDefault(), t(".finder_product").filter(".quality_product.cloud_product").hide(), t(".finder_product").filter(".quality_product.battery_product.50_75_product").show(), t(".finder_product").filter(".quality_product.battery_product.25_50_product").hide(), t(".finder_product").filter(".quality_product.battery_product.75p_product").hide()
                }), t(".75p_btn").on("click", function(e) {
                    e.preventDefault(), t(".finder_product").filter(".quality_product.cloud_product").hide(), t(".finder_product").filter(".quality_product.battery_product.75p_product").show(), t(".finder_product").filter(".quality_product.battery_product.25_50_product").hide(), t(".finder_product").filter(".quality_product.battery_product.50_75_product").hide()
                })
            }), t(".cloud_btn").on("click", function(e) {
                e.preventDefault(), t(".finder_product").filter(".quality_product.cloud_product").show(), t(".finder_product").filter(".quality_product.battery_product").hide(), t(".25_50_btn").on("click", function(e) {
                    e.preventDefault(), t(".finder_product").filter(".quality_product.battery_product").hide(), t(".finder_product").filter(".quality_product.cloud_product.25_50_product").show(), t(".finder_product").filter(".quality_product.cloud_product.50_75_product").hide(), t(".finder_product").filter(".quality_product.cloud_product.75p_product").hide()
                }), t(".50_75_btn").on("click", function(e) {
                    e.preventDefault(), t(".finder_product").filter(".quality_product.battery_product").hide(), t(".finder_product").filter(".quality_product.cloud_product.50_75_product").show(), t(".finder_product").filter(".quality_product.cloud_product.25_50_product").hide(), t(".finder_product").filter(".quality_product.cloud_product.75p_product").hide()
                }), t(".75p_btn").on("click", function(e) {
                    e.preventDefault(), t(".finder_product").filter(".quality_product.battery_product").hide(), t(".finder_product").filter(".quality_product.cloud_product.75p_product").show(), t(".finder_product").filter(".quality_product.cloud_product.25_50_product").hide(), t(".finder_product").filter(".quality_product.cloud_product.50_75_product").hide()
                })
            })
        })
    }), window.images_size = {
        ratio_width: 370,
        ratio_height: 370
    }
}(jQuery);