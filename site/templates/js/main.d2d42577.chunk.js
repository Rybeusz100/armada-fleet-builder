(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    19: function (e, t, a) {
      e.exports = a(47);
    },
    43: function (e, t, a) {},
    44: function (e, t, a) {},
    45: function (e, t, a) {},
    46: function (e, t, a) {},
    47: function (e, t, a) {
      "use strict";
      a.r(t);
      var n = a(3),
        i = a(4),
        s = a(6),
        r = a(5),
        d = a(7),
        c = a(1),
        l = a(0),
        o = a.n(l),
        u = a(18),
        p = a.n(u),
        m = a(8),
        f = a.n(m),
        v =
          (a(43),
          a(44),
          a(45),
          a(46),
          (function (e) {
            function t() {
              return (
                Object(n.a)(this, t),
                Object(s.a)(this, Object(r.a)(t).apply(this, arguments))
              );
            }
            return (
              Object(d.a)(t, e),
              Object(i.a)(t, [
                {
                  key: "calculateShipPoints",
                  value: function (e) {
                    var t = e.points;
                    return (
                      Object.keys(e.upgrades).forEach(function (a) {
                        var n = e.upgrades[a];
                        n && n.points && (t += n.points);
                      }),
                      t
                    );
                  },
                },
                {
                  key: "componentDidMount",
                  value: function () {
                    var e = this;
                    setTimeout(function () {
                      e.scrollContainer &&
                        e.scrollContent &&
                        (e.scrollContent.style.right = "-".concat(
                          e.scrollContainer.clientWidth -
                            e.scrollContent.clientWidth,
                          "px"
                        ));
                    }, 0);
                  },
                },
                {
                  key: "componentWillReceiveProps",
                  value: function (e) {
                    this.saveButton &&
                      this.props.timestamp !== e.timestamp &&
                      ((this.saveButton.innerHTML = "SAVE"),
                      (window.onbeforeunload = function () {
                        return "Changes you made may not be saved.";
                      }));
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var e = this,
                      t = this.props.fleet,
                      a = {
                        assault: t.assault,
                        defense: t.defense,
                        navigation: t.navigation,
                      };
                    return o.a.createElement(
                      "div",
                      {
                        className: "FLEET-BUILDER",
                        ref: function (t) {
                          return (e.scrollContainer = t);
                        },
                      },
                      o.a.createElement(
                        "div",
                        { className: "head" },
                        o.a.createElement(
                          "div",
                          { className: "logo" },
                          o.a.createElement("img", {
                            src: "/armada-fleet-builder/img/logo-armada.svg",
                            width: "120",
                            height: "68",
                            alt: "",
                          })
                        ),
                        o.a.createElement(
                          "div",
                          { className: "fleet-details" },
                          o.a.createElement("div", {
                            className: "faction faction-".concat(t.faction),
                          }),
                          o.a.createElement(
                            "div",
                            { className: "fleet-name" },
                            o.a.createElement("input", {
                              type: "text",
                              value: t.name,
                              maxLength: "35",
                              onChange: this.props.editName,
                            }),
                            o.a.createElement("span", null, t.name)
                          ),
                          o.a.createElement(
                            "div",
                            { className: "fleet-points" },
                            t.points.total
                          )
                        )
                      ),
                      o.a.createElement(
                        "div",
                        {
                          className: "body",
                          ref: function (t) {
                            return (e.scrollContent = t);
                          },
                        },
                        t.ships.map(function (a, n) {
                          return o.a.createElement(
                            "div",
                            { key: n, className: "section" },
                            o.a.createElement(
                              "div",
                              {
                                tabIndex: "-1",
                                onClick: function () {
                                  return !0;
                                },
                                className: "card ship \n\t\t\t\t\t\t\t\t"
                                  .concat(
                                    "huge" === a.size ? "huge" : "",
                                    "\n\t\t\t\t\t\t\t\t"
                                  )
                                  .concat(
                                    a.proxy ? "out-of-stock" : "",
                                    "\n\t\t\t\t\t\t\t\t"
                                  )
                                  .concat(
                                    a.outdated ? "outdated" : "",
                                    "\n\t\t\t\t\t\t\t"
                                  ),
                              },
                              o.a.createElement("div", {
                                className: "image",
                                style: {
                                  backgroundImage: "url(/armada-fleet-builder/img/cards/".concat(
                                    a.image,
                                    ")"
                                  ),
                                },
                              }),
                              o.a.createElement(
                                "div",
                                { className: "title" },
                                a.title
                              ),
                              o.a.createElement(
                                "div",
                                { className: "points" },
                                a.points
                              ),
                              o.a.createElement(
                                "div",
                                { className: "actions" },
                                o.a.createElement("button", {
                                  className: "remove",
                                  onClick: function () {
                                    return e.props.removeCard(a, n);
                                  },
                                }),
                                !a.unique &&
                                  o.a.createElement("button", {
                                    className: "duplicate",
                                    onClick: function () {
                                      return e.props.duplicateShip(a, n);
                                    },
                                  }),
                                0 !== n &&
                                  o.a.createElement("button", {
                                    className: "prev",
                                    onClick: function () {
                                      return e.props.sortCard(
                                        "ships",
                                        n,
                                        "prev"
                                      );
                                    },
                                  }),
                                n !== t.ships.length - 1 &&
                                  o.a.createElement("button", {
                                    className: "next",
                                    onClick: function () {
                                      return e.props.sortCard(
                                        "ships",
                                        n,
                                        "next"
                                      );
                                    },
                                  }),
                                o.a.createElement("button", {
                                  className: "view",
                                  onClick: function () {
                                    return e.props.viewCard(a);
                                  },
                                })
                              )
                            ),
                            Object.keys(a.upgrades).map(function (t) {
                              return (
                                a.upgrades[t] &&
                                a.upgrades[t].id &&
                                o.a.createElement(
                                  "div",
                                  {
                                    key: a.upgrades[t].id,
                                    tabIndex: "-1",
                                    onClick: function () {
                                      return !0;
                                    },
                                    className:
                                      "card upgrade \n\t\t\t\t\t\t\t\t\t"
                                        .concat(
                                          a.upgrades[t].proxy
                                            ? "out-of-stock"
                                            : "",
                                          "\n\t\t\t\t\t\t\t\t\t"
                                        )
                                        .concat(
                                          a.upgrades[t].outdated
                                            ? "outdated"
                                            : "",
                                          "\n\t\t\t\t\t\t\t\t"
                                        ),
                                  },
                                  o.a.createElement("div", {
                                    className: "image",
                                    style: {
                                      backgroundImage: "url(/armada-fleet-builder/img/cards/".concat(
                                        a.upgrades[t].image,
                                        ")"
                                      ),
                                    },
                                  }),
                                  o.a.createElement("div", {
                                    className: "set set-".concat(
                                      a.upgrades[t].set
                                    ),
                                  }),
                                  o.a.createElement(
                                    "div",
                                    { className: "title" },
                                    a.upgrades[t].title
                                  ),
                                  o.a.createElement(
                                    "div",
                                    { className: "points" },
                                    a.upgrades[t].points
                                  ),
                                  a.upgrades[t].dual &&
                                    o.a.createElement("div", {
                                      className: "dual set-".concat(
                                        a.upgrades[t].dual
                                      ),
                                    }),
                                  o.a.createElement(
                                    "div",
                                    { className: "actions" },
                                    o.a.createElement("button", {
                                      className: "remove",
                                      onClick: function () {
                                        return e.props.removeCard(
                                          a.upgrades[t],
                                          n,
                                          t
                                        );
                                      },
                                    }),
                                    !a.upgrades[t].dual &&
                                      o.a.createElement("button", {
                                        className: "swap",
                                        onClick: function () {
                                          return e.props.openSelect({
                                            set: a.upgrades[t].set,
                                            index: n,
                                            upgrade: t,
                                            id: a.upgrades[t].id,
                                          });
                                        },
                                      }),
                                    o.a.createElement("button", {
                                      className: "view",
                                      onClick: function () {
                                        return e.props.viewCard(a.upgrades[t]);
                                      },
                                    })
                                  )
                                )
                              );
                            }),
                            o.a.createElement(
                              "div",
                              { className: "total" },
                              e.calculateShipPoints(a)
                            ),
                            o.a.createElement(
                              "div",
                              {
                                className: "add-upgrade",
                                tabIndex: "-1",
                                onClick: function () {
                                  return !0;
                                },
                              },
                              o.a.createElement("span", { className: "icon" }),
                              o.a.createElement(
                                "span",
                                { className: "label" },
                                "ADD UPGRADE"
                              ),
                              o.a.createElement(
                                "div",
                                { className: "upgrades" },
                                Object.keys(a.upgrades).map(function (i) {
                                  var s =
                                      "-" === i.slice(-2, -1)
                                        ? i.slice(0, -2)
                                        : i,
                                    r = a.upgrades[i] && a.upgrades[i].id;
                                  return o.a.createElement("button", {
                                    key: i,
                                    className:
                                      "set-".concat(s) +
                                      "".concat(
                                        a.upgrades[i] ? " f-disabled" : ""
                                      ) +
                                      "".concat(
                                        t.commander && "commander" === i
                                          ? " f-disabled"
                                          : ""
                                      ),
                                    onClick: function () {
                                      return e.props.openSelect({
                                        set: s,
                                        index: n,
                                        upgrade: i,
                                        id: r,
                                      });
                                    },
                                  });
                                })
                              )
                            )
                          );
                        }),
                        o.a.createElement(
                          "div",
                          { className: "section f-hidden-print" },
                          o.a.createElement(
                            "button",
                            {
                              className: "add-ship",
                              onClick: function () {
                                return e.props.openSelect("ship");
                              },
                            },
                            "ADD SHIP"
                          )
                        ),
                        o.a.createElement(
                          "div",
                          { className: "section squadrons" },
                          t.squadrons.map(function (a, n) {
                            return o.a.createElement(
                              "div",
                              {
                                key: n,
                                tabIndex: "-1",
                                onClick: function () {
                                  return !0;
                                },
                                className: "card squadron \n\t\t\t\t\t\t\t\t"
                                  .concat(
                                    a.proxy ? "out-of-stock" : "",
                                    "\n\t\t\t\t\t\t\t\t"
                                  )
                                  .concat(
                                    a.outdated ? "outdated" : "",
                                    "\n\t\t\t\t\t\t\t"
                                  ),
                              },
                              o.a.createElement("div", {
                                className: "image",
                                style: {
                                  backgroundImage: "url(/armada-fleet-builder/img/cards/".concat(
                                    a.image,
                                    ")"
                                  ),
                                },
                              }),
                              o.a.createElement(
                                "div",
                                { className: "title" },
                                a.quantity > 1 && a.quantity + " \xd7 ",
                                a.title
                              ),
                              o.a.createElement(
                                "div",
                                { className: "points" },
                                a.points * a.quantity
                              ),
                              o.a.createElement(
                                "div",
                                { className: "actions" },
                                o.a.createElement("button", {
                                  className: "remove",
                                  onClick: function () {
                                    return e.props.removeCard(a, n);
                                  },
                                }),
                                o.a.createElement("button", {
                                  className: "swap",
                                  onClick: function () {
                                    return e.props.openSelect({
                                      set: "squadron",
                                      index: n,
                                      id: a.id,
                                      type: a.type,
                                    });
                                  },
                                }),
                                0 !== n &&
                                  o.a.createElement("button", {
                                    className: "prev",
                                    onClick: function () {
                                      return e.props.sortCard(
                                        "squadrons",
                                        n,
                                        "prev"
                                      );
                                    },
                                  }),
                                n !== t.squadrons.length - 1 &&
                                  o.a.createElement("button", {
                                    className: "next",
                                    onClick: function () {
                                      return e.props.sortCard(
                                        "squadrons",
                                        n,
                                        "next"
                                      );
                                    },
                                  }),
                                !a.unique &&
                                  o.a.createElement("button", {
                                    className: "increment",
                                    onClick: function () {
                                      return e.props.squadronQuantity(
                                        n,
                                        "increment"
                                      );
                                    },
                                  }),
                                !a.unique &&
                                  a.quantity > 1 &&
                                  o.a.createElement("button", {
                                    className: "decrement",
                                    onClick: function () {
                                      return e.props.squadronQuantity(
                                        n,
                                        "decrement"
                                      );
                                    },
                                  }),
                                o.a.createElement("button", {
                                  className: "view",
                                  onClick: function () {
                                    return e.props.viewCard(a);
                                  },
                                })
                              )
                            );
                          }),
                          o.a.createElement(
                            "div",
                            { className: "total" },
                            t.points.squadron
                          ),
                          o.a.createElement(
                            "button",
                            {
                              className: "add-squadron",
                              onClick: function () {
                                return e.props.openSelect("squadron");
                              },
                            },
                            o.a.createElement("span", { className: "icon" }),
                            "ADD SQUADRON"
                          )
                        ),
                        o.a.createElement(
                          "div",
                          { className: "section objectives" },
                          Object.keys(a).map(function (t) {
                            return a[t]
                              ? o.a.createElement(
                                  "div",
                                  {
                                    key: t,
                                    tabIndex: "-1",
                                    onClick: function () {
                                      return !0;
                                    },
                                    className:
                                      "card objective\n\t\t\t\t\t\t\t\t"
                                        .concat(
                                          a[t].proxy ? "out-of-stock" : "",
                                          "\n\t\t\t\t\t\t\t\t"
                                        )
                                        .concat(
                                          a[t].outdated ? "outdated" : "",
                                          "\n\t\t\t\t\t\t\t"
                                        ),
                                  },
                                  o.a.createElement("div", {
                                    className: "set set-".concat(t),
                                  }),
                                  o.a.createElement(
                                    "div",
                                    { className: "title" },
                                    a[t].title
                                  ),
                                  o.a.createElement(
                                    "div",
                                    { className: "actions" },
                                    o.a.createElement("button", {
                                      className: "remove",
                                      onClick: function () {
                                        return e.props.removeCard(a[t]);
                                      },
                                    }),
                                    o.a.createElement("button", {
                                      className: "swap",
                                      onClick: function () {
                                        return e.props.openSelect({
                                          set: a[t].set,
                                          id: a[t].id,
                                        });
                                      },
                                    }),
                                    o.a.createElement("button", {
                                      className: "view",
                                      onClick: function () {
                                        return e.props.viewCard(a[t]);
                                      },
                                    })
                                  )
                                )
                              : o.a.createElement(
                                  "button",
                                  {
                                    key: t,
                                    className: "add-objective",
                                    onClick: function () {
                                      return e.props.openSelect(t);
                                    },
                                  },
                                  o.a.createElement("span", {
                                    className: "icon",
                                  }),
                                  "Add ",
                                  t
                                );
                          })
                        ),
                        o.a.createElement(
                          "div",
                          { className: "section f-hidden-print" },
                          o.a.createElement(
                            "div",
                            { className: "fleet-actions" },
                            this.props.user
                              ? o.a.createElement(
                                  "div",
                                  null,
                                  o.a.createElement(
                                    "button",
                                    {
                                      id: "save-fleet",
                                      className: "primary",
                                      ref: function (t) {
                                        return (e.saveButton = t);
                                      },
                                      onClick: function () {
                                        return e.props.saveFleet();
                                      },
                                    },
                                    "SAVE"
                                  ),
                                  o.a.createElement(
                                    "a",
                                    { className: "secondary", href: "/" },
                                    "BACK"
                                  ),
                                  t.id &&
                                    this.props.owner &&
                                    o.a.createElement("button", {
                                      className: "delete",
                                      onClick: function () {
                                        return e.props.deleteFleet();
                                      },
                                    }),
                                  t.id &&
                                    this.props.owner &&
                                    o.a.createElement("button", {
                                      className: "duplicate",
                                      onClick: function () {
                                        return e.props.saveFleet("copy");
                                      },
                                    }),
                                  o.a.createElement("button", {
                                    className: "print",
                                    onClick: function () {
                                      return window.print();
                                    },
                                  }),
                                  o.a.createElement("button", {
                                    className: "export",
                                    onClick: function () {
                                      return e.props.exportFleet();
                                    },
                                  })
                                )
                              : o.a.createElement(
                                  "div",
                                  null,
                                  o.a.createElement(
                                    "button",
                                    {
                                      className: "primary",
                                      onClick: function () {
                                        return window.print();
                                      },
                                    },
                                    "PRINT"
                                  ),
                                  o.a.createElement(
                                    "a",
                                    { className: "secondary", href: "/armada-fleet-builder" },
                                    "BACK"
                                  ),
                                  o.a.createElement("button", {
                                    className: "export",
                                    onClick: function () {
                                      return e.props.exportFleet();
                                    },
                                  })
                                )
                          )
                        )
                      )
                    );
                  },
                },
              ]),
              t
            );
          })(l.Component)),
        g = function (e) {
          var t = {
            assault: e.fleet.assault,
            defense: e.fleet.defense,
            navigation: e.fleet.navigation,
          };
          return o.a.createElement(
            "div",
            { className: "FLEET-CARDS" },
            e.fleet.ships.map(function (t, a) {
              return o.a.createElement(
                "div",
                { key: a, className: "section" },
                o.a.createElement(
                  "div",
                  { className: "cards" },
                  o.a.createElement(
                    "div",
                    {
                      className: "card ship\n\t\t\t\t\t\t\t"
                        .concat(
                          "huge" === t.size ? "huge" : "",
                          "\n\t\t\t\t\t\t\t"
                        )
                        .concat(
                          t.proxy ? "out-of-stock" : "",
                          "\n\t\t\t\t\t\t\t"
                        )
                        .concat(t.outdated ? "outdated" : "", "\n\t\t\t\t\t\t"),
                    },
                    o.a.createElement("div", { className: "name" }, t.title),
                    o.a.createElement("div", {
                      className: "image",
                      style: {
                        backgroundImage: "url(/armada-fleet-builder/img/cards/".concat(t.image, ")"),
                      },
                    }),
                    o.a.createElement("div", { className: "points" }, t.points),
                    o.a.createElement("button", {
                      className: "view",
                      onClick: function () {
                        return e.viewCard(t);
                      },
                    })
                  ),
                  Object.keys(t.upgrades).map(function (a) {
                    return (
                      t.upgrades[a] &&
                      t.upgrades[a].id &&
                      o.a.createElement(
                        "div",
                        {
                          key: t.upgrades[a].id,
                          className: "card upgrade\n\t\t\t\t\t\t\t\t"
                            .concat(
                              t.upgrades[a].proxy ? "out-of-stock" : "",
                              "\n\t\t\t\t\t\t\t\t"
                            )
                            .concat(
                              t.upgrades[a].outdated ? "outdated" : "",
                              "\n\t\t\t\t\t\t\t"
                            ),
                        },
                        o.a.createElement(
                          "div",
                          { className: "name" },
                          t.upgrades[a].title
                        ),
                        o.a.createElement("div", {
                          className: "image",
                          style: {
                            backgroundImage: "url(/armada-fleet-builder/img/cards/".concat(
                              t.upgrades[a].image,
                              ")"
                            ),
                          },
                        }),
                        o.a.createElement(
                          "div",
                          { className: "points" },
                          t.upgrades[a].points
                        ),
                        o.a.createElement("button", {
                          className: "view",
                          onClick: function () {
                            return e.viewCard(t.upgrades[a]);
                          },
                        })
                      )
                    );
                  })
                )
              );
            }),
            e.fleet.squadrons.length > 0 &&
              o.a.createElement(
                "div",
                { className: "section" },
                o.a.createElement(
                  "div",
                  { className: "cards" },
                  e.fleet.squadrons.map(function (t, a) {
                    return o.a.createElement(
                      "div",
                      {
                        key: a,
                        className: "card squadron\n\t\t\t\t\t\t\t\t"
                          .concat(
                            t.proxy ? "out-of-stock" : "",
                            "\n\t\t\t\t\t\t\t\t"
                          )
                          .concat(
                            t.outdated ? "outdated" : "",
                            "\n\t\t\t\t\t\t\t"
                          ),
                      },
                      o.a.createElement("div", { className: "name" }, t.title),
                      o.a.createElement("div", {
                        className: "image",
                        style: {
                          backgroundImage: "url(/armada-fleet-builder/img/cards/".concat(
                            t.image,
                            ")"
                          ),
                        },
                      }),
                      o.a.createElement(
                        "div",
                        { className: "points" },
                        t.points
                      ),
                      o.a.createElement("button", {
                        className: "view",
                        onClick: function () {
                          return e.viewCard(t);
                        },
                      })
                    );
                  })
                )
              ),
            (t.assault || t.defense || t.navigation) &&
              o.a.createElement(
                "div",
                { className: "section" },
                o.a.createElement(
                  "div",
                  { className: "cards" },
                  Object.keys(t).map(function (a) {
                    return (
                      t[a] &&
                      o.a.createElement(
                        "div",
                        {
                          key: a,
                          className: "card objective\n\t\t\t\t\t\t\t\t"
                            .concat(
                              t[a].proxy ? "out-of-stock" : "",
                              "\n\t\t\t\t\t\t\t\t"
                            )
                            .concat(
                              t[a].outdated ? "outdated" : "",
                              "\n\t\t\t\t\t\t\t"
                            ),
                        },
                        o.a.createElement(
                          "div",
                          { className: "name" },
                          t[a].title
                        ),
                        o.a.createElement("div", {
                          className: "image",
                          style: {
                            backgroundImage: "url(/armada-fleet-builder/img/cards/".concat(
                              t[a].image,
                              ")"
                            ),
                          },
                        }),
                        o.a.createElement("button", {
                          className: "view",
                          onClick: function () {
                            return e.viewCard(t[a]);
                          },
                        })
                      )
                    );
                  })
                )
              )
          );
        },
        h = (function (e) {
          function t() {
            var e;
            return (
              Object(n.a)(this, t),
              ((e = Object(s.a)(this, Object(r.a)(t).call(this))).state = {
                ids: [],
                uniques: [],
                modifications: {},
                keywordFilter: "",
              }),
              e
            );
          }
          return (
            Object(d.a)(t, e),
            Object(i.a)(t, [
              {
                key: "componentWillMount",
                value: function () {
                  var e = this;
                  this.setState(function (t) {
                    return (
                      e.props.appState.fleet.ships.forEach(function (e, a) {
                        t.ids.push(e.id),
                          e.unique && t.uniques.push(e.id),
                          Object.keys(e.upgrades).forEach(function (n) {
                            e.upgrades[n] &&
                              (t.ids.push(e.upgrades[n].id),
                              e.upgrades[n].unique &&
                                t.uniques.push(e.upgrades[n].id),
                              e.upgrades[n].modification &&
                                (t.modifications[a] = n));
                          });
                      }),
                      e.props.appState.fleet.squadrons.forEach(function (e) {
                        t.ids.push(e.id), e.unique && t.uniques.push(e.id);
                      }),
                      t
                    );
                  });
                },
              },
              {
                key: "setKeywordFilter",
                value: function (e) {
                  this.setState(function (t) {
                    return (t.keywordFilter = e), t;
                  });
                },
              },
              {
                key: "isRendered",
                value: function (e) {
                  var t = this.props.appState,
                    a = t.selected,
                    n = t.fleet;
                  if (e.faction)
                    if (Array.isArray(e.faction)) {
                      if (-1 === e.faction.indexOf(n.faction)) return !1;
                    } else if (e.faction !== n.faction) return !1;
                  if (e.ship)
                    if ("multi" === e.ship) {
                      if (-1 === e.ships.indexOf(n.ships[a.index].type))
                        return !1;
                      if (1007 === e.id && 1449 === n.ships[a.index].id)
                        return !1;
                    } else if (e.ship !== n.ships[a.index].type) return !1;
                  if (e.dual)
                    if ("-" === a.upgrade.slice(-2, -1)) {
                      var i = a.upgrade.slice(-2);
                      if (
                        null !== n.ships[a.index].upgrades[e.set + i] ||
                        null !== n.ships[a.index].upgrades[e.dual + i]
                      )
                        return !1;
                    } else if (
                      null !== n.ships[a.index].upgrades[e.set] ||
                      null !== n.ships[a.index].upgrades[e.dual]
                    )
                      return !1;
                  return (
                    !this.state.keywordFilter ||
                    !e.keywords ||
                    -1 !== e.keywords.indexOf(this.state.keywordFilter)
                  );
                },
              },
              {
                key: "isOutOfStock",
                value: function (e) {
                  var t = this.props.appState.selected,
                    a = this.props.appState.stock[e.id],
                    n = this.props.appState.stock[e.type];
                  if (
                    (t.id === e.id && a++, t.type === e.type && n++, e.type)
                  ) {
                    if (isNaN(a) || isNaN(n) || a < 1 || n < 1) return !0;
                  } else if (isNaN(a) || a < 1) return !0;
                  return !1;
                },
              },
              {
                key: "isDisabled",
                value: function (e) {
                  var t = this.props.appState,
                    a = t.selected,
                    n = t.fleet,
                    i = this.state,
                    s = i.ids,
                    r = i.uniques,
                    d = i.modifications;
                  if (
                    (4044 === a.id && 4205 === e.id) ||
                    (4044 === e.id && 4205 === a.id)
                  )
                    return !1;
                  if (
                    (1124 === a.id && 4204 === e.id) ||
                    (1124 === e.id && 4204 === a.id)
                  )
                    return !1;
                  if (
                    (1357 === a.id && 4206 === e.id) ||
                    (1357 === e.id && 4206 === a.id)
                  )
                    return !1;
                  if (e.unique && -1 !== r.indexOf(e.id)) return !0;
                  if ("squadron" === e.set && -1 !== s.indexOf(e.id)) return !0;
                  if (a.upgrade) {
                    var c = n.ships[a.index];
                    if (
                      Object.keys(c.upgrades).filter(function (t) {
                        return c.upgrades[t] && c.upgrades[t].id === e.id;
                      }).length
                    )
                      return !0;
                    if (
                      e.modification &&
                      d[a.index] &&
                      d[a.index] !== a.upgrade
                    )
                      return !0;
                    if (
                      e.required &&
                      (!c.traits ||
                        !e.required.every(function (e) {
                          return c.traits.includes(e);
                        }))
                    )
                      return !0;
                    if (
                      1472 === e.id &&
                      (("medium" !== c.size && "large" !== c.size) ||
                        !c.upgrades.commander)
                    )
                      return !0;
                    if (
                      1399 === e.id &&
                      (("defensive-retrofit" in c.upgrades &&
                        "small" !== c.size) ||
                        "huge" === c.size)
                    )
                      return !0;
                    if (
                      (1280 === e.id || 1421 === e.id) &&
                      "fleet-command" in c.upgrades
                    )
                      return !0;
                    if ((1440 === e.id || 1444 === e.id) && 1455 === c.id)
                      return !0;
                    if (
                      2673 === e.id &&
                      "small" !== c.size &&
                      "medium" !== c.size
                    )
                      return !0;
                    if (
                      1021 === e.id &&
                      "medium" !== c.size &&
                      "large" !== c.size
                    )
                      return !0;
                    if (
                      4096 === e.id &&
                      "medium" !== c.size &&
                      "large" !== c.size
                    )
                      return !0;
                    if (1019 === e.id && "large" !== c.size) return !0;
                    if (1017 === e.id && "large" !== c.size) return !0;
                    if (4090 === e.id && "huge" === c.size) return !0;
                    if (
                      4094 === e.id &&
                      "venator" !== c.type &&
                      "victory-class-star-destroyer" !== c.type
                    )
                      return !0;
                    if (
                      (1472 === e.id &&
                        c.upgrades.title &&
                        1280 === c.upgrades.title.id) ||
                      (1280 === e.id &&
                        c.upgrades["offensive-retrofit"] &&
                        1472 === c.upgrades["offensive-retrofit"].id) ||
                      (1280 === e.id &&
                        c.upgrades["offensive-retrofit-2"] &&
                        1472 === c.upgrades["offensive-retrofit-2"].id)
                    )
                      return !0;
                  }
                  return (
                    !(
                      (1180 !== e.id &&
                        1124 !== e.id &&
                        1013 !== e.id &&
                        1062 !== e.id &&
                        4204 !== e.id) ||
                      (-1 === r.indexOf(1180) &&
                        -1 === r.indexOf(1124) &&
                        -1 === r.indexOf(1013) &&
                        -1 === r.indexOf(1062) &&
                        -1 === r.indexOf(4204))
                    ) ||
                    !(
                      (2785 !== e.id && 1080 !== e.id) ||
                      (-1 === r.indexOf(2785) && -1 === r.indexOf(1080))
                    ) ||
                    !(
                      (1064 !== e.id && 1182 !== e.id) ||
                      (-1 === r.indexOf(1064) && -1 === r.indexOf(1182))
                    ) ||
                    !(
                      (1179 !== e.id && 1066 !== e.id) ||
                      (-1 === r.indexOf(1179) && -1 === r.indexOf(1066))
                    ) ||
                    !(
                      (1431 !== e.id && 1207 !== e.id) ||
                      (-1 === r.indexOf(1431) && -1 === r.indexOf(1207))
                    ) ||
                    !(
                      (2791 !== e.id && 1434 !== e.id) ||
                      (-1 === r.indexOf(2791) && -1 === r.indexOf(1434))
                    ) ||
                    !(
                      (1431 !== e.id && 1258 !== e.id) ||
                      (-1 === r.indexOf(1431) && -1 === r.indexOf(1258))
                    ) ||
                    !(
                      (1253 !== e.id && 1434 !== e.id) ||
                      (-1 === r.indexOf(1253) && -1 === r.indexOf(1434))
                    ) ||
                    !(
                      (1445 !== e.id && 1447 !== e.id) ||
                      (-1 === r.indexOf(1445) && -1 === r.indexOf(1447))
                    ) ||
                    !(
                      (1459 !== e.id && 1137 !== e.id) ||
                      (-1 === r.indexOf(1459) && -1 === r.indexOf(1137))
                    ) ||
                    !(
                      (4070 !== e.id && 4041 !== e.id) ||
                      (-1 === r.indexOf(4070) && -1 === r.indexOf(4041))
                    ) ||
                    !(
                      (4077 !== e.id && 4049 !== e.id) ||
                      (-1 === r.indexOf(4077) && -1 === r.indexOf(4049))
                    ) ||
                    !(
                      (4083 !== e.id && 4039 !== e.id) ||
                      (-1 === r.indexOf(4083) && -1 === r.indexOf(4039))
                    ) ||
                    !(
                      (4089 !== e.id && 4040 !== e.id) ||
                      (-1 === r.indexOf(4089) && -1 === r.indexOf(4040))
                    ) ||
                    !(
                      (1357 !== e.id && 4206 !== e.id) ||
                      (-1 === r.indexOf(1357) && -1 === r.indexOf(4206))
                    ) ||
                    !(
                      (6005 !== e.id && 1016 !== e.id) ||
                      (-1 === r.indexOf(6005) && -1 === r.indexOf(1016))
                    ) ||
                    !(
                      (4023 !== e.id && 6003 !== e.id) ||
                      (-1 === r.indexOf(4023) && -1 === r.indexOf(6003))
                    ) ||
                    !(
                      (4205 !== e.id && 4044 !== e.id && 6004 !== e.id) ||
                      (-1 === r.indexOf(4205) &&
                        -1 === r.indexOf(4044) &&
                        -1 === r.indexOf(6004))
                    )
                  );
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = this.props.appState,
                    a = t.selected,
                    n = t.stock,
                    i = t.fleet,
                    s = a.set || a,
                    r = [];
                  return (
                    "rebel" === i.faction &&
                      (r = [
                        "assault",
                        "bomber",
                        "cloak",
                        "counter",
                        "dodge",
                        "escort",
                        "grit",
                        "heavy",
                        "intel",
                        "relay",
                        "rogue",
                        "snipe",
                        "strategic",
                        "swarm",
                      ]),
                    "imperial" === i.faction &&
                      (r = [
                        "adept",
                        "assault",
                        "bomber",
                        "cloak",
                        "counter",
                        "escort",
                        "grit",
                        "heavy",
                        "intel",
                        "relay",
                        "rogue",
                        "snipe",
                        "strategic",
                        "swarm",
                      ]),
                    "separatist" === i.faction &&
                      (r = [
                        "ai",
                        "bomber",
                        "counter",
                        "heavy",
                        "intel",
                        "relay",
                        "screen",
                        "snipe",
                        "swarm",
                      ]),
                    "republic" === i.faction &&
                      (r = [
                        "adept",
                        "bomber",
                        "counter",
                        "dodge",
                        "escort",
                        "grit",
                        "heavy",
                        "intel",
                        "swarm",
                      ]),
                    o.a.createElement(
                      "div",
                      {
                        className: "SELECT ".concat(
                          a.id ? "alt-swap" : "alt-add"
                        ),
                      },
                      o.a.createElement(
                        "div",
                        { className: "head" },
                        o.a.createElement("div", { className: "heading" }, s),
                        o.a.createElement("button", {
                          className: "close",
                          onClick: function () {
                            return e.props.openSelect();
                          },
                        })
                      ),
                      o.a.createElement(
                        "div",
                        { className: "body" },
                        "squadron" === s &&
                          o.a.createElement(
                            "div",
                            { className: "filter" },
                            o.a.createElement(
                              "div",
                              { className: "buttons" },
                              o.a.createElement(
                                "button",
                                {
                                  className: "".concat(
                                    this.state.keywordFilter ? "" : "selected"
                                  ),
                                  onClick: function () {
                                    return e.setKeywordFilter("");
                                  },
                                },
                                "All"
                              ),
                              r.map(function (t) {
                                return o.a.createElement(
                                  "button",
                                  {
                                    key: t,
                                    className: "".concat(
                                      e.state.keywordFilter === t
                                        ? "selected"
                                        : ""
                                    ),
                                    onClick: function () {
                                      return e.setKeywordFilter(t);
                                    },
                                  },
                                  t
                                );
                              })
                            ),
                            o.a.createElement(
                              "div",
                              { className: "select" },
                              o.a.createElement(
                                "select",
                                {
                                  onChange: function (t) {
                                    return e.setKeywordFilter(t.target.value);
                                  },
                                  value: this.state.keywordFilter,
                                },
                                o.a.createElement(
                                  "option",
                                  { value: "" },
                                  "All"
                                ),
                                r.map(function (e) {
                                  return o.a.createElement(
                                    "option",
                                    { key: e, value: e },
                                    e
                                  );
                                })
                              )
                            )
                          ),
                        o.a.createElement(
                          "div",
                          { className: "cards" },
                          window.fleetBuilder.cards[s]
                            .filter(function (t) {
                              return e.isRendered(t);
                            })
                            .map(function (t, i) {
                              return t.divider
                                ? o.a.createElement("hr", { key: i })
                                : o.a.createElement(
                                    "div",
                                    {
                                      key: i,
                                      className:
                                        "card "
                                          .concat(t.set, " ")
                                          .concat(
                                            "huge" === t.size ? "huge" : ""
                                          ) +
                                        "".concat(t.id >= 4e3 ? "new" : "") +
                                        "".concat(a.upgrade ? " upgrade" : "") +
                                        "".concat(
                                          t.id === a.id ? " selected" : ""
                                        ) +
                                        "".concat(
                                          n && n.enabled && e.isOutOfStock(t)
                                            ? " out-of-stock"
                                            : ""
                                        ) +
                                        "".concat(
                                          e.isDisabled(t) ? " f-disabled" : ""
                                        ),
                                    },
                                    o.a.createElement(
                                      "div",
                                      { className: "name" },
                                      t.title
                                    ),
                                    o.a.createElement("div", {
                                      className: "image",
                                      style: {
                                        backgroundImage:
                                          "url(/armada-fleet-builder/img/cards/".concat(
                                            t.image,
                                            ")"
                                          ),
                                      },
                                    }),
                                    o.a.createElement(
                                      "div",
                                      { className: "points" },
                                      t.points
                                    ),
                                    o.a.createElement(
                                      "div",
                                      { className: "actions" },
                                      o.a.createElement("button", {
                                        className: "add",
                                        onClick: function () {
                                          return e.props.addCard(t);
                                        },
                                      })
                                    )
                                  );
                            })
                        )
                      )
                    )
                  );
                },
              },
            ]),
            t
          );
        })(l.Component),
        E = function (e) {
          return o.a.createElement(
            "div",
            { className: "VIEW" },
            o.a.createElement(
              "div",
              { className: "head" },
              o.a.createElement("div", { className: "heading" }, e.card.title),
              o.a.createElement("button", {
                className: "close",
                onClick: function () {
                  return e.viewCard();
                },
              })
            ),
            o.a.createElement(
              "div",
              { className: "body" },
              o.a.createElement(
                "div",
                { className: "details" },
                o.a.createElement(
                  "div",
                  { className: "card" },
                  o.a.createElement("img", {
                    src: "/armada-fleet-builder/img/cards/".concat(e.card.image),
                    alt: "",
                  })
                ),
                o.a.createElement("div", {
                  className: "faq",
                  dangerouslySetInnerHTML: {
                    __html: window.fleetBuilder.faq[e.card.id],
                  },
                })
              )
            )
          );
        },
        N = (function (e) {
          function t() {
            var e;
            return (
              Object(n.a)(this, t),
              ((e = Object(s.a)(this, Object(r.a)(t).call(this))).state = {
                viewing: null,
                selected: null,
                timestamp: Date.now(),
                fleet: window.fleetBuilder.fleet,
                stock: window.fleetBuilder.stock,
                user: window.fleetBuilder.user,
                owner: window.fleetBuilder.owner,
              }),
              (e.openSelect = e.openSelect.bind(Object(c.a)(Object(c.a)(e)))),
              (e.viewCard = e.viewCard.bind(Object(c.a)(Object(c.a)(e)))),
              (e.addCard = e.addCard.bind(Object(c.a)(Object(c.a)(e)))),
              (e.removeCard = e.removeCard.bind(Object(c.a)(Object(c.a)(e)))),
              (e.sortCard = e.sortCard.bind(Object(c.a)(Object(c.a)(e)))),
              (e.squadronQuantity = e.squadronQuantity.bind(
                Object(c.a)(Object(c.a)(e))
              )),
              (e.duplicateShip = e.duplicateShip.bind(
                Object(c.a)(Object(c.a)(e))
              )),
              (e.editName = e.editName.bind(Object(c.a)(Object(c.a)(e)))),
              (e.saveFleet = e.saveFleet.bind(Object(c.a)(Object(c.a)(e)))),
              (e.deleteFleet = e.deleteFleet.bind(Object(c.a)(Object(c.a)(e)))),
              (e.exportFleet = e.exportFleet.bind(Object(c.a)(Object(c.a)(e)))),
              e
            );
          }
          return (
            Object(d.a)(t, e),
            Object(i.a)(t, [
              {
                key: "openSelect",
                value: function (e) {
                  this.setState(function (t) {
                    return (t.selected = e || null), (t.viewing = null), t;
                  });
                },
              },
              {
                key: "viewCard",
                value: function (e) {
                  this.setState(function (t) {
                    return (t.viewing = e || null), (t.selected = null), t;
                  });
                },
              },
              {
                key: "addCard",
                value: function (e) {
                  var t = this;
                  this.setState(function (a) {
                    var n = a.selected.set || a.selected;
                    if ("ship" === n) {
                      var i = JSON.parse(JSON.stringify(e));
                      a.fleet.ships.push(i);
                    }
                    if ("squadron" === n) {
                      var s = JSON.parse(JSON.stringify(e)),
                        r = a.fleet.squadrons[a.selected.index];
                      r
                        ? ((s.quantity = s.unique ? 1 : r.quantity),
                          (a.fleet.squadrons[a.selected.index] = s))
                        : ((s.quantity = 1), a.fleet.squadrons.push(s));
                    }
                    if (
                      (("assault" !== n &&
                        "defense" !== n &&
                        "navigation" !== n) ||
                        (a.fleet[n] = e),
                      a.selected.upgrade)
                    ) {
                      var d = a.fleet.ships[a.selected.index],
                        c = JSON.parse(JSON.stringify(e)),
                        l = d.upgrades[a.selected.upgrade];
                      if (
                        (l &&
                          ((1280 !== l.id && 1421 !== l.id && 1472 !== l.id) ||
                            delete d.upgrades["fleet-command-0"],
                          1399 === l.id &&
                            delete d.upgrades["defensive-retrofit-0"],
                          1401 === l.id && delete d.upgrades["officer-0"],
                          1422 === l.id && delete d.upgrades["weapons-team-0"],
                          1420 === l.id && delete d.upgrades["support-team-0"],
                          4080 === l.id &&
                            delete d.upgrades["defensive-retrofit-0"],
                          4051 === l.id &&
                            (delete d.upgrades["fleet-support-0"],
                            4007 === d.id && (d.upgrades.ordnance = null),
                            4008 === d.id && (d.upgrades.turbolasers = null))),
                        "commander" === n && (a.fleet.commander = e),
                        e.dual)
                      )
                        if ("-" === a.selected.upgrade.slice(-2, -1)) {
                          var o = a.selected.upgrade.slice(-2);
                          d.upgrades[e.dual + o] = !0;
                        } else d.upgrades[e.dual] = !0;
                      (1280 !== e.id && 1421 !== e.id && 1472 !== e.id) ||
                        (d.upgrades["fleet-command-0"] = null),
                        1399 === e.id &&
                          (d.upgrades["defensive-retrofit-0"] = null),
                        1401 === e.id && (d.upgrades["officer-0"] = null),
                        1422 === e.id && (d.upgrades["weapons-team-0"] = null),
                        1420 === e.id && (d.upgrades["support-team-0"] = null),
                        4080 === e.id &&
                          (d.upgrades["defensive-retrofit-0"] = null),
                        4051 === e.id &&
                          ((d.upgrades["fleet-support-0"] = null),
                          4007 === d.id && (d.upgrades.ordnance = "disabled"),
                          4008 === d.id &&
                            (d.upgrades.turbolasers = "disabled")),
                        (d.upgrades[a.selected.upgrade] = c);
                    }
                    return (
                      (a.selected = null),
                      (a.fleet.points.total = t.calculatePoints().total),
                      (a.fleet.points.squadron = t.calculatePoints().squadron),
                      (a.timestamp = Date.now()),
                      a
                    );
                  }),
                    this.calculateStock();
                },
              },
              {
                key: "removeCard",
                value: function (e, t, a) {
                  var n = this;
                  this.setState(function (i) {
                    if (
                      ("ship" === e.set &&
                        (i.fleet.ships[t].upgrades.commander &&
                          (i.fleet.commander = null),
                        i.fleet.ships.splice(t, 1)),
                      "squadron" === e.set && i.fleet.squadrons.splice(t, 1),
                      ("assault" !== e.set &&
                        "defense" !== e.set &&
                        "navigation" !== e.set) ||
                        (i.fleet[e.set] = null),
                      a)
                    ) {
                      var s = i.fleet.ships[t];
                      if (
                        ("commander" === a && (i.fleet.commander = null),
                        e.dual)
                      )
                        if ("-" === a.slice(-2, -1)) {
                          var r = a.slice(-2);
                          s.upgrades[e.dual + r] = null;
                        } else s.upgrades[e.dual] = null;
                      (1280 !== e.id && 1421 !== e.id && 1472 !== e.id) ||
                        delete s.upgrades["fleet-command-0"],
                        1399 === e.id &&
                          delete s.upgrades["defensive-retrofit-0"],
                        1401 === e.id && delete s.upgrades["officer-0"],
                        1422 === e.id && delete s.upgrades["weapons-team-0"],
                        1420 === e.id && delete s.upgrades["support-team-0"],
                        4080 === e.id &&
                          delete s.upgrades["defensive-retrofit-0"],
                        4051 === e.id &&
                          (delete s.upgrades["fleet-support-0"],
                          4007 === s.id && (s.upgrades.ordnance = null),
                          4008 === s.id && (s.upgrades.turbolasers = null)),
                        "commander" === a &&
                          (s.upgrades["offensive-retrofit"] &&
                            1472 === s.upgrades["offensive-retrofit"].id &&
                            ((s.upgrades["offensive-retrofit"] = null),
                            delete s.upgrades["fleet-command-0"]),
                          s.upgrades["offensive-retrofit-2"] &&
                            1472 === s.upgrades["offensive-retrofit-2"].id &&
                            ((s.upgrades["offensive-retrofit-2"] = null),
                            delete s.upgrades["fleet-command-0"])),
                        (s.upgrades[a] = null);
                    }
                    return (
                      (i.selected = null),
                      (i.fleet.points.total = n.calculatePoints().total),
                      (i.fleet.points.squadron = n.calculatePoints().squadron),
                      (i.timestamp = Date.now()),
                      i
                    );
                  }),
                    this.calculateStock();
                },
              },
              {
                key: "squadronQuantity",
                value: function (e, t) {
                  var a = this;
                  this.setState(function (n) {
                    return (
                      "increment" === t && n.fleet.squadrons[e].quantity++,
                      "decrement" === t && n.fleet.squadrons[e].quantity--,
                      (n.fleet.points.total = a.calculatePoints().total),
                      (n.fleet.points.squadron = a.calculatePoints().squadron),
                      (n.timestamp = Date.now()),
                      n
                    );
                  }),
                    this.calculateStock();
                },
              },
              {
                key: "duplicateShip",
                value: function (e, t) {
                  var a = this,
                    n = JSON.parse(JSON.stringify(e));
                  Object.keys(n.upgrades).forEach(function (e) {
                    var t = n.upgrades[e];
                    t &&
                      ((1280 !== t.id && 1421 !== t.id && 1472 !== t.id) ||
                        delete n.upgrades["fleet-command-0"],
                      1399 === t.id &&
                        delete n.upgrades["defensive-retrofit-0"],
                      1401 === t.id && delete n.upgrades["officer-0"],
                      1422 === t.id && delete n.upgrades["weapons-team-0"],
                      1420 === t.id && delete n.upgrades["support-team-0"],
                      4080 === t.id &&
                        delete n.upgrades["defensive-retrofit-0"],
                      4051 === t.id &&
                        (delete n.upgrades["fleet-support-0"],
                        4007 === n.id && (n.upgrades.ordnance = null),
                        4008 === n.id && (n.upgrades.turbolasers = null)),
                      t.unique &&
                        (t.dual &&
                          (4201 === n.id && "-2" === e.slice(-2)
                            ? (n.upgrades[t.dual + "-2"] = null)
                            : (n.upgrades[t.dual] = null)),
                        (n.upgrades[e] = null)));
                  }),
                    this.setState(function (e) {
                      return (
                        e.fleet.ships.splice(t + 1, 0, n),
                        (e.fleet.points.total = a.calculatePoints().total),
                        (e.timestamp = Date.now()),
                        e
                      );
                    }),
                    this.calculateStock();
                },
              },
              {
                key: "sortCard",
                value: function (e, t, a) {
                  this.setState(function (n) {
                    var i = "prev" === a ? t - 1 : t + 1,
                      s = [n.fleet[e][i], n.fleet[e][t]];
                    return (
                      (n.fleet[e][t] = s[0]),
                      (n.fleet[e][i] = s[1]),
                      (n.timestamp = Date.now()),
                      n
                    );
                  }),
                    this.calculateStock();
                },
              },
              {
                key: "calculatePoints",
                value: function () {
                  var e = { total: 0, squadron: 0 };

                  localStorage.setItem(
                    "fleet-" + this.state.fleet.faction,
                    JSON.stringify(this.state.fleet)
                  );

                  return (
                    this.state.fleet.ships.forEach(function (t) {
                      (e.total += t.points),
                        Object.keys(t.upgrades).forEach(function (a) {
                          var n = t.upgrades[a];
                          n && n.points && (e.total += n.points);
                        });
                    }),
                    this.state.fleet.squadrons.forEach(function (t) {
                      (e.total += t.points * t.quantity),
                        (e.squadron += t.points * t.quantity);
                    }),
                    e
                  );
                },
              },
              {
                key: "calculateStock",
                value: function () {
                  var e = JSON.parse(JSON.stringify(window.fleetBuilder.stock)),
                    t = e && e.enabled;
                  this.setState(function (a) {
                    return (
                      a.fleet.ships.forEach(function (a) {
                        t && Number.isInteger(e[a.id]) && e[a.id]--,
                          t && Number.isInteger(e[a.type]) && e[a.type]--,
                          (a.proxy =
                            t &&
                            (isNaN(e[a.id]) ||
                              isNaN(e[a.type]) ||
                              e[a.id] < 0 ||
                              e[a.type] < 0)),
                          Object.keys(a.upgrades).forEach(function (n) {
                            var i = a.upgrades[n];
                            i &&
                              i.points &&
                              (t && Number.isInteger(e[i.id]) && e[i.id]--,
                              (a.upgrades[n].proxy =
                                t && (isNaN(e[i.id]) || e[i.id] < 0)));
                          });
                      }),
                      a.fleet.squadrons.forEach(function (a) {
                        t && Number.isInteger(e[a.id]) && e[a.id]--,
                          t &&
                            Number.isInteger(e[a.type]) &&
                            (e[a.type] -= a.quantity),
                          (a.proxy =
                            t &&
                            (isNaN(e[a.id]) ||
                              isNaN(e[a.type]) ||
                              e[a.id] < 0 ||
                              e[a.type] < 0));
                      }),
                      ["assault", "defense", "navigation"].forEach(function (
                        n
                      ) {
                        if (a.fleet[n]) {
                          var i = a.fleet[n];
                          t && Number.isInteger(e[i.id]) && e[i.id]--,
                            (i.proxy = t && (isNaN(e[i.id]) || e[i.id] < 0));
                        }
                      }),
                      (a.stock = e),
                      a
                    );
                  });
                },
              },
              {
                key: "checkOutdated",
                value: function () {
                  this.setState(function (e) {
                    return (
                      e.fleet.ships.forEach(function (e) {
                        var t = window.fleetBuilder.cards.ship.find(function (
                          t
                        ) {
                          return t.id === e.id;
                        });
                        (e.outdated = !t || (t && t.version !== e.version)),
                          Object.keys(e.upgrades).forEach(function (t) {
                            var a = e.upgrades[t];
                            if (a && a.points) {
                              var n = window.fleetBuilder.cards[a.set].find(
                                function (e) {
                                  return e.id === a.id;
                                }
                              );
                              e.upgrades[t].outdated =
                                !n || (n && n.version !== a.version);
                            }
                          });
                      }),
                      e.fleet.squadrons.forEach(function (e) {
                        var t = window.fleetBuilder.cards.squadron.find(
                          function (t) {
                            return t.id === e.id;
                          }
                        );
                        e.outdated = !t || (t && t.version !== e.version);
                      }),
                      ["assault", "defense", "navigation"].forEach(function (
                        t
                      ) {
                        if (e.fleet[t]) {
                          var a = e.fleet[t],
                            n = window.fleetBuilder.cards[t].find(function (e) {
                              return e.id === a.id;
                            });
                          a.outdated = !n || (n && n.version !== a.version);
                        }
                      }),
                      e
                    );
                  });
                },
              },
              {
                key: "editName",
                value: function (e) {
                  e.persist(),
                    this.setState(function (t) {
                      return (
                        (t.fleet.name = e.target.value),
                        (t.timestamp = Date.now()),
                        t
                      );
                    });
                },
              },
              {
                key: "saveFleet",
                value: function (e) {
                  var t = this;
                  f.a
                    .post("/api/save-fleet/", {
                      fleet: this.state.fleet,
                      action: e,
                    })
                    .then(function (a) {
                      (window.onbeforeunload = function () {
                        return null;
                      }),
                        "copy" === e
                          ? window.location.replace(
                              "/fleet/".concat(a.data, "/")
                            )
                          : (window.history.replaceState(
                              {},
                              "",
                              "/fleet/".concat(a.data, "/")
                            ),
                            (document.getElementById("save-fleet").innerHTML =
                              "SAVED"),
                            t.setState(function (e) {
                              return (e.fleet.id = a.data), (e.owner = !0), e;
                            }));
                    })
                    .catch(function (e) {
                      return alert(e);
                    });
                },
              },
              {
                key: "deleteFleet",
                value: function () {
                  window.confirm(
                    "Delete ".concat(this.state.fleet.name, "?")
                  ) &&
                    f.a
                      .post("/api/delete-fleet/", { id: this.state.fleet.id })
                      .then(function (e) {
                        (window.onbeforeunload = function () {
                          return null;
                        }),
                          window.location.replace("/");
                      })
                      .catch(function (e) {
                        return alert(e);
                      });
                },
              },
              {
                key: "exportFleet",
                value: function () {
                  var e = document.createElement("form");
                  e.setAttribute("method", "post"),
                    e.setAttribute("action", "/export/"),
                    e.setAttribute("target", "_blank");
                  var t = document.createElement("input");
                  t.setAttribute("type", "hidden"),
                    t.setAttribute("name", "json"),
                    t.setAttribute("value", JSON.stringify(this.state.fleet)),
                    e.appendChild(t),
                    document.body.appendChild(e),
                    e.submit(),
                    document.body.removeChild(e);
                },
              },
              {
                key: "componentWillMount",
                value: function () {
                  this.calculateStock(), this.checkOutdated();
                },
              },
              {
                key: "render",
                value: function () {
                  return o.a.createElement(
                    "div",
                    null,
                    o.a.createElement(
                      "div",
                      { className: "l-page" },
                      o.a.createElement(
                        "div",
                        { className: "l-page-primary" },
                        o.a.createElement(v, {
                          timestamp: this.state.timestamp,
                          user: this.state.user,
                          owner: this.state.owner,
                          fleet: this.state.fleet,
                          openSelect: this.openSelect,
                          viewCard: this.viewCard,
                          removeCard: this.removeCard,
                          sortCard: this.sortCard,
                          squadronQuantity: this.squadronQuantity,
                          duplicateShip: this.duplicateShip,
                          editName: this.editName,
                          saveFleet: this.saveFleet,
                          deleteFleet: this.deleteFleet,
                          exportFleet: this.exportFleet,
                        })
                      ),
                      o.a.createElement(
                        "div",
                        { className: "l-page-secondary" },
                        o.a.createElement(g, {
                          fleet: this.state.fleet,
                          viewCard: this.viewCard,
                        })
                      )
                    ),
                    (this.state.selected || this.state.viewing) &&
                      o.a.createElement(
                        "div",
                        { className: "l-page-modal" },
                        this.state.selected &&
                          o.a.createElement(h, {
                            appState: this.state,
                            openSelect: this.openSelect,
                            addCard: this.addCard,
                          }),
                        this.state.viewing &&
                          o.a.createElement(E, {
                            card: this.state.viewing,
                            viewCard: this.viewCard,
                          })
                      )
                  );
                },
              },
            ]),
            t
          );
        })(l.Component);
      p.a.render(o.a.createElement(N, null), document.getElementById("root"));
    },
  },
  [[19, 1, 2]],
]);
//# sourceMappingURL=main.d2d42577.chunk.js.map
