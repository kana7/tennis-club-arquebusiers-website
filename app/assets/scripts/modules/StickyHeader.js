import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class StickyHeader {
  constructor() {
    this.lazyImages = $(".lazyload");
    this.siteHeader = $(".site-header");
    this.headerTriggerElement = $(".scroll-header-trigger");
    this.createHeaderWayPoint();
  }

  refreshWaypoints() {
    this.lazyImages.load(function() {
      Waypoint.refreshAll();
    });
  }

  createHeaderWayPoint() {
    var that = this;
    new Waypoint({
      element: that.headerTriggerElement[0],
      handler: function(direction) {
        if (direction == "down") {
          that.siteHeader.addClass("site-header--minimize");
        } else {
          that.siteHeader.removeClass("site-header--minimize");
        }
      },
      offset: 20
    });
  }
}

export default StickyHeader;
